import React from "react";
import { Link } from "react-router";

function Home({ doctors }) {
  const totalDoctors = doctors.length;
  const availableTodayCount = doctors.filter(
    (doctor) => doctor.isAvailableToday && doctor.availableSlots > 0
  ).length;
  const bookedAppointmentsCount = doctors.filter(
    (doctor) => doctor.isBooked
  ).length;

  return (
    <div className="home">
      <h1>Doctor Appointment Portal</h1>
      <p style={{ color: "#64748b", fontSize: "1.05rem" }}>
        Book appointments with top medical specialists quickly and easily.
      </p>

      <div className="summary-box">
        <div>
          <h2 style={{ color: "#0284c7", fontSize: "2rem" }}>{totalDoctors}</h2>
          <p>Total Doctors</p>
        </div>
        <div>
          <h2 style={{ color: "#16a34a", fontSize: "2rem" }}>{availableTodayCount}</h2>
          <p>Available Today</p>
        </div>
        <div>
          <h2 style={{ color: "#9333ea", fontSize: "2rem" }}>{bookedAppointmentsCount}</h2>
          <p>Booked Appointments</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link
          to="/doctors"
          className="btn-book"
          style={{ textDecoration: "none", padding: "0.75rem 1.75rem" }}
        >
          Find & Book Doctors
        </Link>
      </div>
    </div>
  );
}

export default Home;
