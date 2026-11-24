import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard";

function DoctorList({ doctors, onBook, onCancel }) {
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  const specializations = [
    "All",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic",
    "Pediatrician",
    "Dentist"
  ];

  const filteredDoctors =
    selectedSpecialization === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialization === selectedSpecialization);

  return (
    <div className="home">
      <h1>Find a Doctor</h1>
      <p style={{ color: "#64748b" }}>
        Filter by specialization and book available appointment slots.
      </p>

      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="specialization-filter" style={{ fontWeight: 600, marginRight: "0.5rem" }}>
          Filter by Specialization:
        </label>
        <select
          id="specialization-filter"
          className="filter-dropdown"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <div className="doctor-list">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBook={onBook}
            onCancel={onCancel}
          />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
