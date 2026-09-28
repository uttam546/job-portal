
function SearchBar() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to bottom, #212529, #000000)"
      }}
    >
      <div className="container">

        <div
          className="card border-0 shadow-lg rounded-4 p-4"
          style={{ backgroundColor: "#1c1c1c" }}
        >

          <div className="text-center mb-4">

            <h2 className="text-white fw-bold">
              Search Your Dream Job
            </h2>

            <p className="text-secondary mb-0">
              Find jobs by title, location and experience.
            </p>

          </div>

          <div className="row g-3">

            <div className="col-lg-4">

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="🔍 Job Title"
              />

            </div>

            <div className="col-lg-3">

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="📍 Location"
              />

            </div>

            <div className="col-lg-3">

              <select className="form-select form-select-lg">

                <option>Experience</option>
                <option>Fresher</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>

              </select>

            </div>

            <div className="col-lg-2 d-grid">

              <button className="btn btn-danger btn-lg">
                Search
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;