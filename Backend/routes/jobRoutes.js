const express = require("express");

const router = express.Router();
const { createJob, getAllJobs, getMyJobs, updateJob, deleteJob} = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
    "/create",
    authMiddleware,
    roleMiddleware("recruiter"),
    createJob
);
router.get("/", getAllJobs);

router.get(
    "/my-jobs",
    authMiddleware,
    roleMiddleware("recruiter"),
    getMyJobs
);
router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("recruiter"),
    updateJob
);
router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("recruiter"),
    deleteJob
);

module.exports = router;