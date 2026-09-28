import { useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateJob() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post(
                "/jobs/create",
                formData,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            toast.success(res.data.message);

            navigate("/recruiter-dashboard");

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Failed to create job"
            );

        }

    };

    return (

        <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center">

            <div
                className="card bg-black text-white border-danger shadow-lg p-4"
                style={{ width: "600px" }}
            >

                <h2 className="text-center text-danger mb-4">
                    Create Job
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Job Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Job Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-danger w-100"
                    >
                        Create Job
                    </button>

                </form>

            </div>

        </div>

    );
}

export default CreateJob;