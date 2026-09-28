import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MyApplications() {
    const [applications, setApplications] = useState([]);
    const token = localStorage.getItem("token");
     const navigate = useNavigate();

    const getApplications = async () => {
        try {
            const res = await API.get(
                "/application/my-applications",
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            setApplications(res.data.applications);

        } catch (error) {

            toast.error("Unable to Fetch Applications");

        }

    };

    useEffect(() => {
        getApplications();
    }, []);

    return (
        <>
<div className="container-fluid bg-dark min-vh-100 text-white">
            <div className="row bg-black p-3 shadow">
                <div className="col-md-6">
                    <h2 className="text-danger">
                        My Applications
                    </h2>
                </div>
                <div className="col-md-6 text-end">
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/student-dashboard")}
                    >
                        Back
                    </button>
                </div>
            </div>
            
            <table className="table table-dark table-bordered">
                <thead>
                    <tr>

                        <th>Job</th>
                        <th>Company</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        applications.map((app)=>(
                            <tr key={app._id}>
                                <td>{app.job.title}</td>
                                <td>{app.job.company}</td>
                                <td>{app.status}</td>
                            </tr>
                        ))

                    }

                </tbody>

            </table>

        </div>
        </>

    );

}

export default MyApplications;