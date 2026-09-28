import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function ViewApplicants() {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const token = localStorage.getItem("token");
    const [applications, setApplications] = useState([]);
    const getApplications = async () => {
        try {
            const res = await API.get(`/application/job/${jobId}/applicants`, {
                headers: {
                    Authorization: token
                }
            });
            setApplications(res.data.applications);
        } catch (error) {
            toast.error("Unable to Load Applications");
        }
    };
    const updateStatus = async (id, status) => {
        try {
            const res = await API.put(`/application/${id}/status`,

                { status },

                {
                    headers: {
                        Authorization: token
                    }
                }

            );

            toast.success(res.data.message);

            getApplications();

        } catch (error) {

            toast.error("Update Failed");

        }

    };

    useEffect(() => {

        getApplications();

    }, []);

    return (

        <div className="container-fluid bg-dark min-vh-100 text-white">

            <div className="row bg-black p-3 shadow">

                <div className="col-md-6">

                    <h2 className="text-danger">

                        Manage Applications

                    </h2>

                </div>

                <div className="col-md-6 text-end">

                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/recruiter-dashboard")}
                    >
                        Back
                    </button>

                </div>

            </div>

            <div className="container mt-4">

                <table className="table table-dark table-bordered">

                    <thead>

                        <tr>

                            <th>Student</th>

                            <th>Email</th>

                            <th>Job</th>

                            <th>Company</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            applications.map((app) => (

                                <tr key={app._id}>

                                    <td>{app.student?.name}</td>

                                    <td>{app.student?.email}</td>

                                    <td>{app.job?.title}</td>

                                    <td>{app.job?.company}</td>

                                    <td>

                                        <select

                                            className="form-select"

                                            value={app.status}

                                            onChange={(e) =>
                                                updateStatus(
                                                    app._id,
                                                    e.target.value
                                                )
                                            }

                                        >

                                            <option value="Pending">Pending</option>

                                            <option value="Shortlisted">Shortlisted</option>

                                            <option value="Selected">Selected</option>

                                            <option value="Rejected">Rejected</option>

                                        </select>

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

export default ViewApplicants;