const user = require("./../models/userSchema");
const moment = require("moment")

// create user
exports.userpost = async (req, res) => {
    const { name, phoneNumber, password, role } = req.body;

    if (!name || !phoneNumber || !password || !role) {
        res.status(400).json({ error: "All input is required" });
    }

    try {
        const { id } = req.params;
        const preuser = await user.findOne({ _id: id });
        if (preuser) {
            res.status(400).json({ error: "This user already exist in our database" });
        } else {
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const userData = new user({
                name, phoneNumber, password, role, datecreated: dateCreate
            });

            await userData.save();
            res.status(200).json(userData)
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}

// get all users
exports.getUser = async (req, res) => {

    try {
        const userData = await user.find();

        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}

//get single user
exports.getSingleuser = async (req, res) => {
    const { id } = req.params;

    try {
        const { id } = req.params;
        const SingleUserData = await user.findOne({ _id: id });

        res.status(200).json(SingleUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}

// delete user 
exports.deleteuser = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUserData = await user.findByIdAndDelete({ _id: id });

        res.status(200).json(deleteUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}

// update user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber, password, role } = req.body;

    try {
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        const updateUserdata = await user.findByIdAndUpdate({ _id: id }, {
            name, phoneNumber, password, role, dateUpdated: dateUpdate
        }, { new: true });

        await updateUserdata.save();

        res.status(200).json(updateUserdata)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}