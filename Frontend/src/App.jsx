import { BrowserRouter, Routes, Route } from "react-router-dom";


import StudentDashboard from "./Pages/StudentDashboard";
import RecruiterDashboard from "./Pages/RecruiterDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreateJob from "./Pages/CreateJob";
import MyApplications from "./Pages/MyApplications";
import ManageUsers from "./Pages/ManageUsers";
import ManageJobs from "./Pages/ManageJobs";
import ViewApplicants from "./Pages/ViewApplicants";
import StudentProfile from "./Pages/StudentProfile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users"element={<ManageUsers />}/>
        <Route path="/admin/manage-jobs" element={<ManageJobs/>}/>
        <Route path="/view-applicants/:jobId" element={<ViewApplicants/>}/>
        <Route path="/createJob" element={<CreateJob/>}/>
        <Route path="/student-profile" element={<StudentProfile/>}/>
        <Route path="/my-applications"element={<MyApplications/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;