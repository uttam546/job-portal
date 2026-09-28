import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentProfile() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        degree: "",
        skills: "",
        about: ""
    });
    const getProfile = async () => {
        try {
            const res = await API.get("/profile", {
                headers: {
                    Authorization: token
                }
            });
            setProfile(res.data.user);
        } catch (error) {
            toast.error("Unable to Load Profile");
        }
    };
    useEffect(() => {
        getProfile();
    }, []);
    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };
    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            const res = await API.put(
                "/profile/update",
                profile,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Update Failed");

        }

    };

    return (
        <div className="container-fluid bg-dark min-vh-100 text-white">
            <div className="row bg-black p-3 shadow">
                <div className="col-md-6">
                    <h2 className="text-danger">
                        Student Profile
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
            <div className="container mt-5">
                <div className="card bg-black border-danger p-4">
                    <form onSubmit={updateProfile}>
                        <input
                            className="form-control mb-3"
                            name="name"
                            placeholder="Name"
                            value={profile.name}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            value={profile.email}
                            disabled
                        />

                        <input
                            className="form-control mb-3"
                            name="phone"
                            placeholder="Phone"
                            value={profile.phone}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="college"
                            placeholder="College"
                            value={profile.college}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="degree"
                            placeholder="Degree"
                            value={profile.degree}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-3"
                            name="skills"
                            placeholder="Skills"
                            value={profile.skills}
                            onChange={handleChange}
                        />
                        <textarea
                            className="form-control mb-3"
                            rows="4"
                            name="about"
                            placeholder="About Yourself"
                            value={profile.about}
                            onChange={handleChange}
                        />

                        <button className="btn btn-danger w-100">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;