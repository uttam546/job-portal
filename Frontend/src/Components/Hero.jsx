// function Hero() {
//   return (
//     <section className="bg-dark text-white py-5">
//       <div className="container">

//         <div className="row align-items-center">

//           <div className="col-lg-6">

//             <span className="badge bg-danger fs-6 mb-3">
//               🚀 India's No.1 Job Portal
//             </span>

//             <h1 className="display-2 fw-bold mt-3">
//               Find Your
//               <span className="text-danger"> Dream Job</span>
//             </h1>

//             <p className="lead mt-4 text-light">
//               Search thousands of jobs from top companies and
//               apply with one click.
//             </p>

//             <button className="btn btn-danger btn-lg me-3 mt-3">
//               Find Jobs
//             </button>

//             <button className="btn btn-outline-light btn-lg mt-3">
//               Hire Talent
//             </button>

//           </div>

//           <div className="col-lg-6 text-center">

//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700"
//               className="img-fluid rounded-4 shadow"
//               alt="Hero"
//             />

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;

import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section
      className="bg-dark text-white py-5"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left Section */}
          <div className="col-lg-6">

            <span className="badge bg-danger fs-6 px-3 py-2 mb-3">
              🚀 India's Trusted Job Portal
            </span>

            <h1
              className="fw-bold mt-3"
              style={{
                fontSize: "3.8rem",
                lineHeight: "1.2"
              }}
            >
              Find Your
              <span className="text-danger"> Dream Job</span>
              <br />
              Build Your Future
            </h1>

            <p
              className="lead text-secondary mt-4"
              style={{
                maxWidth: "550px"
              }}
            >
              Discover thousands of verified job opportunities from
              leading companies. Apply easily, track your applications,
              and connect with top recruiters.
            </p>

            <div className="mt-4">

              <button
                className="btn btn-danger btn-lg px-4 me-3"
                onClick={() => navigate("/register")}
              >
                Get Started
              </button>

              <button
                className="btn btn-outline-light btn-lg px-4"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

            </div>

            {/* Quick Stats */}
            <div className="row mt-5">

              <div className="col-4">

                <h3 className="text-danger fw-bold">
                  500+
                </h3>

                <p className="text-light">
                  Students
                </p>

              </div>

              <div className="col-4">

                <h3 className="text-danger fw-bold">
                  100+
                </h3>

                <p className="text-light">
                  Jobs
                </p>

              </div>

              <div className="col-4">

                <h3 className="text-danger fw-bold">
                  50+
                </h3>

                <p className="text-light">
                  Recruiters
                </p>

              </div>

            </div>

          </div>

          {/* Right Section */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
              alt="Job Portal"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxHeight: "550px",
                objectFit: "cover"
              }}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;