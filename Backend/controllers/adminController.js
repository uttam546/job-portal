const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");

const getDashboard = async (req, res) => {

    try {
        const totalStudents = await User.countDocuments({
            role: "student"
        });

        const totalRecruiters = await User.countDocuments({
            role: "recruiter"
        });

        const totalJobs = await Job.countDocuments();

        const totalApplications = await Application.countDocuments();

        res.status(200).json({

            success: true,

            totalStudents,

            totalRecruiters,

            totalJobs,

            totalApplications

        });

    } catch (error) {
         console.error(error)
        res.status(500).json({
            success: false,
            message: error.message

        });

    }

};

const getAllUsers = async (req, res) => {

    try {

        const users = await User.find().select("-password");

        res.status(200).json({
            success: true,
            users

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


const deleteUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
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
        const jobs = await Job.find()
            .populate("recruiter", "name email");
        res.status(200).json({
            success: true,
            jobs
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
const getAllApplications = async (req, res) => {

    try {

        const applications = await Application.find()
            .populate("student", "name email")
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
// const updateApplicationStatus = async (req, res) => {
//     try {
//         const { status } = req.body;
//         const application = await Application.findById(req.params.id);
//         if (!application) {

//             return res.status(404).json({
//                 success: false,
//                 message: "Application Not Found"
//             });
//         }
//         application.status = status;

//         await application.save();

//         res.status(200).json({
//             success: true,
//             message: "Status Updated Successfully"
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message
//         });

//     }

// };

module.exports = {
    getDashboard,
    getAllUsers,
    deleteUser,
    getAllJobs,
    deleteJob,
    getAllApplications
   
};