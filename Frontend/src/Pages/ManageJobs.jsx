import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ManageJobs() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [jobs, setJobs] = useState([]);

    const [search, setSearch] = useState("");

    const getJobs = async () => {

        try {

            const res = await API.get("/admin/jobs", {
                headers: {
                    Authorization: token
                }
            });

            setJobs(res.data.jobs);

        } catch (error) {

            toast.error("Unable to Load Jobs");

        }

    };

    const deleteJob = async (id) => {

        const confirmDelete = window.confirm("Delete this job?");

        if (!confirmDelete) return;

        try {

            const res = await API.delete(`/admin/job/${id}`, {
                headers: {
                    Authorization: token
                }
            });

            toast.success(res.data.message);

            getJobs();

        } catch (error) {

            toast.error(error.response?.data?.message || "Delete Failed");

        }

    };

    useEffect(() => {
        getJobs();
   }, []);

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container-fluid bg-dark min-vh-100 text-white">
            <div className="row bg-black p-3 shadow">
                <div className="col-md-6">
                    <h2 className="text-danger">
                        Manage Jobs
                    </h2>
                </div>
                <div className="col-md-6 text-end">
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/admin-dashboard")}
                    >
                        Back
                    </button>
                </div>
            </div>
            <div className="container mt-4">
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search Job..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="table table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Salary</th>
                            <th>Recruiter</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredJobs.map((job) => (
                                <tr key={job._id}>
                                    <td>{job.title}</td>
                                    <td>{job.company}</td>
                                    <td>{job.location}</td>
                                    <td>{job.salary}</td>
                                    <td>
                                        {job.recruiter?.name || "N/A"}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteJob(job._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ManageJobs;