import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-white pt-5 pb-3"
      style={{ borderTop: "2px solid #dc3545" }}
    >
      <div className="container">

        <div className="row">

          {/* Logo */}

          <div className="col-lg-4 col-md-6 mb-4">

            <h2 className="text-danger fw-bold">
              JobPortal
            </h2>

            <p className="text-secondary mt-3">
              Connecting talented students with top recruiters.
              Find your dream job and build your career with confidence.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6 mb-4">

            <h5 className="text-danger">
              Quick Links
            </h5>

            <ul className="list-unstyled mt-3">

              <li className="mb-2">
                <Link className="text-decoration-none text-light" to="/">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-decoration-none text-light" to="/login">
                  Login
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-decoration-none text-light" to="/register">
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5 className="text-danger">
              Contact
            </h5>

            <p className="text-light mt-3 mb-2">
              📳utmp5678@gmail.com
            </p>

            <p className="text-light mb-2">
              📞 +91 9336943935
            </p>

            <p className="text-light">
              📍 Uttar Pradesh, India
            </p>

          </div>

          {/* Developer */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5 className="text-danger">
              Developer
            </h5>

            <p className="text-light mt-3">
              Built using
            </p>

            <p className="text-secondary">
              • React <br/>
              • Node.js <br/>
              • Express <br/>
              • MongoDB
            </p>

          </div>

        </div>

        <hr className="border-danger" />

        <div className="text-center">

          <p className="mb-0 text-secondary">
            © 2026 JobPortal. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;