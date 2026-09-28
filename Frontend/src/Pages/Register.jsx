import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function Register() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

    console.log(formData);

    try {
        const res = await API.post("/auth/register", formData);

        console.log(res);

       toast.success("Registration Successful");

        navigate("/login");

    } catch (error) {

    console.log(error);

    console.log(error.response);

    console.log(error.response?.data);

    alert(error.response?.data?.message || error.message);

}
};
  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center">

      <div className="card bg-black text-white border-danger shadow-lg p-4" style={{width:"500px"}}>

        <h2 className="text-center text-danger mb-4">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

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

          <div className="mb-3">
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

          <div className="mb-4">
            <label className="form-label">Role</label>

            <select className="form-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
            >
              <option value="student">Student</option>

              <option value="recruiter">Recruiter</option>

            </select>

          </div>

          <button
           type="submit"
           className="btn btn-danger w-100">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;