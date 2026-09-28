function Stats() {
  return (
    <section className="bg-black py-5">
      <div className="container">

        <div className="row text-center g-4">

          <div className="col-md-3">
            <div className="card bg-dark text-white border-danger shadow-lg p-4">
              <h2 className="text-danger fw-bold">10K+</h2>
              <p>Jobs Available</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-white border-danger shadow-lg p-4">
              <h2 className="text-danger fw-bold">5K+</h2>
              <p>Companies</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-white border-danger shadow-lg p-4">
              <h2 className="text-danger fw-bold">50K+</h2>
              <p>Job Seekers</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-white border-danger shadow-lg p-4">
              <h2 className="text-danger fw-bold">1000+</h2>
              <p>Recruiters</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
// import { FaBriefcase, FaBuilding, FaUserGraduate, FaUsers } from "react-icons/fa";

// function Stats() {
//   return (
//     <section className="py-5 bg-black">

//       <div className="container">

//         <div className="text-center mb-5">

//           <h2 className="text-white fw-bold">
//             Trusted by Thousands
//           </h2>

//           <p className="text-secondary">
//             Connecting talented students with top recruiters across India.
//           </p>

//         </div>

//         <div className="row g-4">

//           <div className="col-lg-3 col-md-6">

//             <div
//               className="card bg-dark border-danger text-center text-white h-100 shadow-lg"
//               style={{ borderRadius: "18px" }}
//             >

//               <div className="card-body">

//                 <FaBriefcase
//                   size={45}
//                   className="text-danger mb-3"
//                 />

//                 <h2 className="fw-bold text-danger">
//                   100+
//                 </h2>

//                 <p className="mb-0 fs-5">
//                   Jobs Posted
//                 </p>

//               </div>

//             </div>

//           </div>

//           <div className="col-lg-3 col-md-6">

//             <div
//               className="card bg-dark border-danger text-center text-white h-100 shadow-lg"
//               style={{ borderRadius: "18px" }}
//             >

//               <div className="card-body">

//                 <FaBuilding
//                   size={45}
//                   className="text-danger mb-3"
//                 />

//                 <h2 className="fw-bold text-danger">
//                   50+
//                 </h2>

//                 <p className="mb-0 fs-5">
//                   Companies
//                 </p>

//               </div>

//             </div>

//           </div>

//           <div className="col-lg-3 col-md-6">

//             <div
//               className="card bg-dark border-danger text-center text-white h-100 shadow-lg"
//               style={{ borderRadius: "18px" }}
//             >

//               <div className="card-body">

//                 <FaUserGraduate
//                   size={45}
//                   className="text-danger mb-3"
//                 />

//                 <h2 className="fw-bold text-danger">
//                   500+
//                 </h2>

//                 <p className="mb-0 fs-5">
//                   Students
//                 </p>

//               </div>

//             </div>

//           </div>

//           <div className="col-lg-3 col-md-6">

//             <div
//               className="card bg-dark border-danger text-center text-white h-100 shadow-lg"
//               style={{ borderRadius: "18px" }}
//             >

//               <div className="card-body">

//                 <FaUsers
//                   size={45}
//                   className="text-danger mb-3"
//                 />

//                 <h2 className="fw-bold text-danger">
//                   40+
//                 </h2>

//                 <p className="mb-0 fs-5">
//                   Recruiters
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Stats;