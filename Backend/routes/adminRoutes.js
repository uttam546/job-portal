const express = require("express");
const router = express.Router();
const { getDashboard, getAllUsers, deleteUser,
        getAllJobs, deleteJob, getAllApplications,
       updateApplicationStatus
     } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");


// Dashboard
router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("admin"),
    getDashboard
);

// Manage Users
router.get(
    "/users",
    authMiddleware,
    roleMiddleware("admin"),
    getAllUsers
);

router.delete(
    "/user/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteUser
);

// Manage Jobs
router.get(
    "/jobs",
    authMiddleware,
    roleMiddleware("admin"),
    getAllJobs
);

router.delete(
    "/job/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteJob
);


// router.get(
//     "/applications",
//     authMiddleware,
//     roleMiddleware("admin"),
//     getAllApplications
// );

// router.put(
//     "/application/:id",
//     authMiddleware,
//     roleMiddleware("admin"),
//     updateApplicationStatus
// );


module.exports = router;