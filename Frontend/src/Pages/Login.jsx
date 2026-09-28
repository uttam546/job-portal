import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

      const res = await API.post("/auth/login", formData);

      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.role);

      if (res.data.role === "student") {
        navigate("/student-dashboard");
      } else if (res.data.role === "recruiter") {
        navigate("/recruiter-dashboard");
      } else {
        navigate("/admin-dashboard");
      }

    } catch (error) {

     toast.error(error.response?.data?.message || "Login Failed");

    }
  };

  return (
    <div className="container-fluid bg-dark vh-100 d-flex justify-content-center align-items-center">

      <div
        className="card bg-black text-white p-5 border-danger shadow"
        style={{ width: "450px" }}
      >

        <h2 className="text-center text-danger mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className="mb-4">

            <label className="form-label">Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="btn btn-danger w-100"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;