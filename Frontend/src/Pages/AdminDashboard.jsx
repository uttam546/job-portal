import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { toast } from "react-toastify";




function AdminDashboard() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [dashboard, setDashboard] = useState({
    totalStudents: 0,

    totalRecruiters: 0,

    totalJobs: 0,

    totalApplications: 0

});

    const logout = () => {

        localStorage.clear();

        navigate("/login");

    };
    const getDashboard = async () => {
    try {
        const res = await API.get(
            "/admin/dashboard",
            {
                headers: {
                    Authorization: token
                }
            }
        );
        setDashboard(res.data);
    }
    catch (error) {
        toast.error("Unable to Load Dashboard");
    }
};
useEffect(() => { getDashboard();

         }, []);


    return (

        <div className="container-fluid bg-dark min-vh-100 text-white">

            <div className="row bg-black p-3 shadow">

                <div className="col-md-6">

                    <h2 className="text-danger">

                        Admin Dashboard

                    </h2>

                </div>

                <div className="col-md-6 text-end">

                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-black border-danger p-3 text-center">
                            <h5>Total Students</h5>
                            <h2 className="text-danger">
                                {dashboard.totalStudents}
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-black border-danger p-3 text-center">
                            <h5>Total Recruiters</h5>
                            <h2 className="text-danger">
                                {dashboard.totalRecruiters}
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-black border-danger p-3 text-center">
                            <h5>Total Jobs</h5>
                            <h2 className="text-danger">
                                {dashboard.totalJobs}
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-black border-danger p-3 text-center">
                            <h5>Applications</h5>
                            <h2 className="text-danger">
                                {dashboard.totalApplications}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3>
                        Admin Controls
                    </h3>
                    <hr />
                    
                    <button className="btn btn-danger me-3"
                     onClick={() => navigate("/admin/manage-users")}>
                     Manage Users
                     </button>

                    <button className="btn btn-danger me-3"
                    onClick={() => navigate("/admin/manage-jobs")}>
                        Manage Jobs
                    </button>
                    {/* <button className="btn btn-danger"
                    onClick={() => navigate("/admin/manage-applications")}>
                        Manage Applications
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;