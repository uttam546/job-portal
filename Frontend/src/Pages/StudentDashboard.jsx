import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const getJobs = async () => {

    try {

      const res = await API.get("/jobs");

      setJobs(res.data.jobs);

    } catch (error) {

      toast.error("Unable to fetch jobs");

    }

  };

  const getApplications = async () => {
    try {
        const res = await API.get("/application/my-applications", {
            headers: {
                Authorization: token
            }
        });
        setApplications(res.data.applications);
    } catch (error) {
        toast.error("Unable to fetch applications");
    }};

  useEffect(() => {
     getJobs();
     getApplications();
    }, []);


  const applyJob = async (jobId) => {
    try {
        const res = await API.post(
            "/application/apply",
            {
                jobId
            },
            {
                headers: {
                    Authorization: token
                }
            }
        );

        toast.success(res.data.message);
        getApplications();

    } catch (error) {

        toast.error(error.response?.data?.message || "Application Failed"
        );
    }
};

  return (

    <div className="container-fluid bg-dark min-vh-100 text-white">

      <div className="row bg-black shadow p-3">

        <div className="col-md-6">

          <h2 className="text-danger">
            Student Dashboard
          </h2>

        </div>

        <div className="col-md-6 text-end">
      
         <button
          className="btn btn-danger me-2"
         onClick={()=>navigate("/student-profile")}
          >Profile</button>

    <button
        className="btn btn-danger me-2"
        onClick={() => navigate("/my-applications")}
    >
        My Applications
       </button>

      <button className="btn btn-danger"
              onClick={() => navigate("/login")}
      >
        Logout
       </button>

      </div>

      </div>

      <div className="container mt-4">

        <h3 className="mb-4">
          Welcome ! {name} 👋
        </h3>

        <div className="row">
          <div className="col-md-4">
            <div className="card bg-black border-danger text-center p-3">
              <h5>Total Jobs</h5>
              <h2 className="text-danger">
                {jobs.length}
              </h2>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card bg-black border-danger text-center p-3">

              <h5>Applied Jobs</h5>

              <h2 className="text-danger">
                {applications.length}
              </h2>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card bg-black border-danger text-center p-3">

              <h5>Pending</h5>

              <h2 className="text-danger">
                {applications.filter(app => app.status === "Pending").length}
              </h2>

            </div>

          </div>

        </div>

        <div className="mt-5">

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search Jobs..."
          />

          <div className="row">

            {

              jobs.map((job) => (

                <div className="col-md-4 mb-4" key={job._id}>

                  <div className="card bg-black border-danger text-white h-100">

                    <div className="card-body">

                      <h4 className="text-danger">

                        {job.title}

                      </h4>

                      <p>

                        <strong>Company :</strong> {job.company}

                      </p>

                      <p>

                        <strong>Location :</strong> {job.location}

                      </p>

                      <p>

                        <strong>Salary :</strong> {job.salary}
                      </p>
                      <p>
                        {job.description}
                      </p>
                      <button
                         className="btn btn-danger w-100"
                         onClick={() => applyJob(job._id)}
                      >
                          Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;