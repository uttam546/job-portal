const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes")
const adminRoutes = require("./routes/adminRoutes");
const profileRoutes = require("./routes/profileRoutes");


dotenv.config();    //reads .env file
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/application", applicationRoutes);
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Job Portal Backend Running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});