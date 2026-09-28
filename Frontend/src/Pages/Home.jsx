import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"
import SearchBar from "../Components/SearchBar"
import Stats from "../Components/Stats"
import Categories from "../Components/Categories";
import FeaturedJobs from "../Components/FeaturedJobs";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <section className="hero-section text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold">
                Find Your
                <span className="text-danger"> Dream Job</span>
              </h1>
              <p className="lead mt-3">
                Discover thousands of job opportunities and build your future
                with the best companies.
              </p>
              <button className="btn btn-danger btn-lg mt-3 me-3">
                Find Jobs
              </button>
              <button className="btn btn-outline-light btn-lg mt-3">
                Browse Companies
              </button>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
                className="img-fluid rounded"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
      <SearchBar/>
      <Categories/>
      <FeaturedJobs/>
      <Stats/>
      <Footer />
    </>
  );
}

export default Home;