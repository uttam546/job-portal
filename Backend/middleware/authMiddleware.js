const jwt = require("jsonwebtoken");



const authMiddleware = (req, res, next) => {
    try {
        // Read token from request header
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access Denied. No Token Provided"
            });
        }
        // Verify JWT Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Store user data in request
        req.user = decoded;
        // Go to next function
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }
};

module.exports = authMiddleware;