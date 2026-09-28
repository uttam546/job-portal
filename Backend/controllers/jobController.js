const Job = require("../models/Job");
const createJob = async (req, res) => {
    try {
        const {
            title,
            company,
            location,
            salary,
            description
        } = req.body;

        const newJob = await Job.create({
            title,
            company,
            location,
            salary,
            description,
            recruiter: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Job Created Successfully",
            job: newJob
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate(       //we can see the recruiters id
            "recruiter",
            "name email"
        );
        res.status(200).json({
            success: true,
            count: jobs.length,
            jobs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getMyJobs = async (req, res) => {
    try {
        const jobs = await Job.find({
            recruiter: req.user.id
        });
        res.status(200).json({
            success: true,
            totalJobs: jobs.length,
            jobs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



const updateJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job Not Found"
            });
        }

        // Check Ownership
        else if (job.recruiter.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You can update only your own jobs"
            });
        }
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        res.status(200).json({
            success: true,
            message: "Job Updated Successfully",
            job: updatedJob
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job Not Found"
            });
        }

        // Check Ownership
        else if (job.recruiter.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You can delete only your own jobs"
            });
        }
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Job Deleted Successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createJob,
    getAllJobs,
    getMyJobs,
    updateJob,
    deleteJob
};