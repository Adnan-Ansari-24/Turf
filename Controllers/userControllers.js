const user = require("./../models/userSchema");
const moment = require("moment");

// create user
exports.userpost = async (req, res) => {
    const { name, phoneNumber, password, role } = req.body;

    if (!name || !phoneNumber || !password || !role) {
        res.status(400).json({ error: "All input is required" });
    };

    try {
        // const { phoneNumber } = req.body;
        const preuser = await user.findOne({ phoneNumber });
        if (preuser) {
            res
                .status(400)
                .json({ error: "This user already exist in our database" });
        } else {
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const userData = new user({
                name,
                phoneNumber,
                password,
                role,
                datecreated: dateCreate,
            });

            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error);
    }
};

// get all users
exports.getUser = async (req, res) => {
    try {
        const userData = await user.find();

        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error);
    }
};

//get single user
exports.getSingleuser = async (req, res) => {
    // const { id } = req.params;

    try {
        const { id } = req.body;
        const SingleUserData = await user.findOne({ id });

        res.status(200).json(SingleUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error);
    }
};

// delete user
exports.deleteuser = async (req, res) => {


    try {
        const { id } = req.params;
        const deleteUserData = await user.findByIdAndDelete({ _id: id });

        res.status(200).json(deleteUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error);
    }
};

// update user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber, password, role } = req.body;

    try {
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        user
            .findByIdAndUpdate(
                id,
                {
                    name,
                    phoneNumber,
                    password,
                    role,
                    dateUpdated: dateUpdate,
                },
                { new: true }
            )
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                res.status(400).json(error);
                console.log(error);
            });
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error);
    }
};
