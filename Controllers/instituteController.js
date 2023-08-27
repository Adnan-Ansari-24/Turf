const institute = require("./../models/instituteSchema");
const moment = require("moment")

// create institute
exports.institutepost = async (req, res) => {
    const { Location, Discription, Admin_Id } = req.body;

    if (!Location || !Discription || !Admin_Id) {
        res.status(400).json({ error: "All input is required" });
    }

    try {
        const { id } = req.params;
        const { Location, Discription, Admin_Id } = req.body;
        const preinstitute = await institute.findOne({ _id: id });
        if (preinstitute) {
            res.status(400).json({ error: "This institute already exist in our database" });
        } else {
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const instituteData = new institute({
                Location, Discription, Admin_Id, datecreated: dateCreate
            });

            await instituteData.save();
            res.status(200).json(instituteData)
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}

// get all institutes
exports.getInstitute = async (req, res) => {

    try {
        const instituteData = await institute.find();

        res.status(200).json(instituteData)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error")
    }
}

// get single institute
exports.getSingleinstitute = async (req, res) => {


    try {
        const { id } = req.params;
        const SingleInstituteData = await institute.findOne({ _id: id });

        res.status(200).json(SingleInstituteData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error", error)
    }
}

// delete institute
exports.deleteinstitute = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteInstituteData = await institute.findByIdAndDelete({ _id: id });

        res.status(200).json(deleteInstituteData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error",error)
    }
}

// update institute
exports.updateInstitute = async (req, res) => {
    const { id } = req.params;
    const { Location, Discription, Admin_Id } = req.body;

    try {
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        const updateInstitutedata = await institute.findByIdAndUpdate({ _id: id }, {
            Location, Discription, Admin_Id, dateUpdated: dateUpdate
        }, { new: true });

        await updateInstitutedata.save();

        res.status(200).json(updateInstitutedata)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error",error)
    }
}