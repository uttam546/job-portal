function FeaturedJobs() {

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      salary: "₹12 LPA"
    },
    {
      title: "Backend Developer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "₹15 LPA"
    },
    {
      title: "AI Engineer",
      company: "OpenAI",
      location: "Remote",
      salary: "₹20 LPA"
    },
    {
      title: "Cyber Security",
      company: "TCS",
      location: "Pune",
      salary: "₹8 LPA"
    }
  ];

  return (
    <section className="py-5 bg-black">

      <div className="container">

        <h2 className="text-center text-white fw-bold mb-5">
          Featured <span className="text-danger">Jobs</span>
        </h2>

        <div className="row">

          {jobs.map((job, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="card bg-dark text-white border-danger h-100">

                <div className="card-body">

                  <h4>{job.title}</h4>

                  <p className="text-danger fw-bold">
                    {job.company}
                  </p>

                  <p>📍 {job.location}</p>

                  <p>{job.salary}</p>

                  <button className="btn btn-danger w-100">
                    Apply Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedJobs;