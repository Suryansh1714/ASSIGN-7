import React from "react";
import { Link } from "react-router";
import DoctorCard from "../components/DoctorCard";

function Appointments({ doctors, onBook, onCancel }) {
  const bookedDoctors = doctors.filter((doc) => doc.isBooked);
  const totalConsultationFee = bookedDoctors.reduce(
    (total, doc) => total + doc.fee,
    0
  );

  return (
    <div className="appointments-page">
      <h1>My Booked Appointments</h1>
      <p style={{ color: "#64748b" }}>
        Review your scheduled doctor appointments and consultation charges.
      </p>

      {bookedDoctors.length === 0 ? (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            No appointments booked
          </p>
          <div style={{ marginTop: "1rem" }}>
            <Link to="/doctors" className="btn-book" style={{ textDecoration: "none" }}>
              Explore Available Doctors
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="doctor-list">
            {bookedDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={onBook}
                onCancel={onCancel}
              />
            ))}
          </div>

          <div className="total-fee">
            Total Consultation Fee: ₹{totalConsultationFee}
          </div>
        </>
      )}
    </div>
  );
}

export default Appointments;
