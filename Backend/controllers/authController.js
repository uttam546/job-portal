const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered ❌"
            });
        }
        const adminExists = await User.findOne({ role: "admin" });
        if (role === "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin registration not allowed ❌"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check whether user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found 😒"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password 🙅"
            });
        }
        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );
        res.status(200).json({
            success: true,
            message: "Login Successfully ✅",
            token,
            role: user.role,
            name:user.name,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    registerUser, 
    loginUser
};