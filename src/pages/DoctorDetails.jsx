import React from "react";
import { useParams, Link } from "react-router";

function DoctorDetails({ doctors, onBook, onCancel }) {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id, 10));

  if (!doctor) {
    return (
      <div className="details-page">
        <h2>Doctor Not Found</h2>
        <p>The requested doctor could not be found.</p>
        <Link to="/doctors" style={{ color: "#0284c7" }}>
          ← Back to Doctors List
        </Link>
      </div>
    );
  }

  const isAvailable = doctor.isAvailableToday && doctor.availableSlots > 0;

  return (
    <div className="details-page">
      <Link
        to="/doctors"
        style={{
          color: "#0284c7",
          textDecoration: "none",
          fontWeight: 600,
          marginBottom: "1rem",
          display: "inline-block"
        }}
      >
        ← Back to Doctors List
      </Link>

      <h1>{doctor.name}</h1>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Hospital / Clinic:</strong> {doctor.hospital}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>
      <p><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
      <p><strong>Rating:</strong> ⭐ {doctor.rating} / 5</p>
      <p><strong>Available Slots:</strong> {doctor.availableSlots}</p>

      <div style={{ margin: "1rem 0" }}>
        {isAvailable ? (
          <span className="badge-available">Available Today</span>
        ) : (
          <span className="badge-unavailable">Not Available</span>
        )}

        {doctor.experience >= 10 && (
          <span className="badge-senior">Senior Doctor</span>
        )}
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        {doctor.isBooked ? (
          <button
            type="button"
            className="btn-cancel"
            onClick={() => onCancel(doctor.id)}
          >
            Cancel Appointment
          </button>
        ) : !doctor.isAvailableToday ? (
          <button type="button" disabled className="btn-disabled">
            Not Available Today
          </button>
        ) : doctor.availableSlots === 0 ? (
          <button type="button" disabled className="btn-disabled">
            No Slots Left
          </button>
        ) : (
          <button
            type="button"
            className="btn-book"
            onClick={() => onBook(doctor.id)}
          >
            Book Appointment
          </button>
        )}
      </div>
    </div>
  );
}

export default DoctorDetails;
