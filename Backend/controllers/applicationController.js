const Application = require("../models/Application");
const Job = require("../models/Job");

// Student applies for a job
const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    // Check if job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Prevent duplicate application
    const alreadyApplied = await Application.findOne({
      student: req.user.id,
      job: jobId,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    // Save application
    const application = await Application.create({
      student: req.user.id,
      job: jobId,
    });

    res.status(201).json({
      success: true,
      message: "Application Submitted Successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Student views own applications
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      student: req.user.id,
    })
      .populate("job")
      .populate("student", "name email");

    res.status(200).json({
      success: true,
      total: applications.length,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getJobApplicants = async (req, res) => {

    try {

        const applications = await Application.find({
            job: req.params.jobId
        })
        .populate("student", "name email phone college degree skills")
        .populate("job", "title company");

        res.status(200).json({
            success: true,
            applications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const application = await Application.findById(req.params.id);
        if (!application) {

            return res.status(404).json({
                success: false,
                message: "Application Not Found"
            });

        }


        application.status = status;

        await application.save();

        res.status(200).json({
            success: true,
            message: "Status Updated Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {
  applyJob,
  getMyApplications,
  getJobApplicants,
  updateApplicationStatus
};