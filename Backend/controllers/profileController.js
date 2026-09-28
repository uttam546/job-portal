const User = require("../models/User");

const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateProfile = async (req, res) => {

    try {

        const {
            name,
            phone,
            college,
            degree,
            skills,
            about
        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        user.name = name || user.name;
        user.phone = phone || user.phone;
        user.college = college || user.college;
        user.degree = degree || user.degree;
        user.skills = skills || user.skills;
        user.about = about || user.about;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports ={
    getProfile,
    updateProfile
};