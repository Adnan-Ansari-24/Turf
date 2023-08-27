const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userControllers");
// const institute = require("../models/instituteSchema");
const institutecontrollers = require("../Controllers/instituteController")

// routes
router.post("/user/register", controllers.userpost);
router.get("/user/getAlluser", controllers.getUser);
router.get("/user/singleuser/:id", controllers.getSingleuser);
router.delete("/user/deleteuser/:id", controllers.deleteuser);
router.put("/user/updateuser/:id", controllers.updateUser);
router.post("/institute/register", institutecontrollers.institutepost);
router.get("/institute/getAllinstitute", institutecontrollers.getInstitute);
router.get("/institute/getsingleinstitute/:id", institutecontrollers.getSingleinstitute);
router.delete("/institute/deleteinstitute/:id", institutecontrollers.deleteinstitute);
router.put("/institute/updateinstitute/:id", institutecontrollers.updateInstitute);
module.exports = router;