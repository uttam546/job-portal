
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow"
      style={{ borderBottom: "2px solid #dc3545" }}
    >
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-danger" to="/">
        🏬JobPortal
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="#hero">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#categories">
                Categories
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#stats">
                Jobs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#footer">
                Contact
              </a>
            </li>

          </ul>

          {/* Buttons */}
          <div className="d-flex">

            <Link
              className="btn btn-outline-danger me-2 px-4"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn btn-danger px-4"
              to="/register"
            >
              Register
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;