const express = require("express");
const router = express.Router();

const {applyJob, getMyApplications, updateApplicationStatus, getJobApplicants} = require("../controllers/applicationController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Student Apply Job
router.post(
  "/apply",
  authMiddleware,
  roleMiddleware("student"),
  applyJob
);

// Student My Applications
router.get(
  "/my-applications",
  authMiddleware,
  roleMiddleware("student"),
  getMyApplications
);
router.get(
    "/job/:jobId/applicants",
    authMiddleware,
    roleMiddleware("recruiter"),
    getJobApplicants
);

router.put(
    "/:id/status",
    authMiddleware,
    roleMiddleware("recruiter"),
    updateApplicationStatus
);

module.exports = router;