import React from "react";
import { Link } from "react-router";

function Navbar({ bookedCount }) {
  return (
    <nav className="navbar">
      <Link to="/" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0284c7" }}>
        DoctorCare
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">
          Appointments
          <span className="badge-count">{bookedCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
