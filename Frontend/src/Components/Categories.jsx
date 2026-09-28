import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Data Analyst",
    "AI Engineer",
    "Cyber Security",
    "Cloud Engineer"
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Popular <span className="text-danger">Categories</span>
        </h2>

        <div className="row">

          {categories.map((category, index) => (

            <div className="col-md-3 mb-4" key={index}>

              <div className="card bg-black border-danger text-center p-4 h-100">

                <h5>{category}</h5>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;