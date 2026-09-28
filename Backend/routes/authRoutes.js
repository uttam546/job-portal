const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
const {registerUser,loginUser} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, (req, res) => {

    res.status(200).json({
        success: true,
        message: "Protected Route Accessed Successfully",
        user: req.user
    });
});

module.exports = router;