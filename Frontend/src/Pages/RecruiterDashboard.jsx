import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {

    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const getMyJobs = async () => {
    
        try {

            const res = await API.get("/jobs/my-jobs", {
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

        try {

            await API.delete(`/jobs/${id}`, {
                headers: {
                    Authorization: token
                }
            });

            toast.success("Job Deleted");

            getMyJobs();

        } catch (error) {
            toast.error("Delete Failed");

        }

    };

    useEffect(() => {

        getMyJobs();

    }, []);

    return (

        <div className="container-fluid bg-dark min-vh-100 text-white">

            <div className="row bg-black shadow p-3">

                <div className="col-md-6">

                    <h2 className="text-danger">
                        Recruiter Dashboard
                    </h2>

                </div>

                <div className="col-md-6 text-end">

                    <button 
                    className="btn btn-danger"
                    onClick={()=>{
                        navigate("/CreateJob")}}
                    >
                        Create Job
                    </button>
                        
                    <button className="btn btn-danger"
                             onClick={() => navigate("/login")}
                     >
                    Logout
                    </button>


                </div>

            </div>

            <div className="container mt-4">

                <div className="card bg-black border-danger p-3">

                    <h4>Total Jobs</h4>

                    <h1 className="text-danger">
                        {jobs.length}
                    </h1>

                </div>

                <div className="mt-5">

                    <h3 className="mb-4">
                        My Posted Jobs
                    </h3>

                    <table className="table table-dark table-bordered">

                        <thead>

                            <tr>
                                <th>Title</th>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Salary</th>
                                <th>Action</th>
                                <th>Applications</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                jobs.map((job)=>(

                                    <tr key={job._id}>

                                        <td>{job.title}</td>

                                        <td>{job.company}</td>

                                        <td>{job.location}</td>

                                        <td>{job.salary}</td>

                                        <td>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={()=>deleteJob(job._id)}
                                            >

                                                Delete

                                            </button>

                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-sm me-2 "
                                                 onClick={() => navigate(`/view-applicants/${job._id}`)}
                                            >
                                             View Applicants
                                            </button>
                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default RecruiterDashboard;