import React from "react";
import { Link } from "react-router";

function DoctorCard({ doctor, onBook, onCancel }) {
  // Determine availability badge
  const isAvailable = doctor.isAvailableToday && doctor.availableSlots > 0;

  return (
    <div className="doctor-card">
      <div>
        <h3>{doctor.name}</h3>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Experience:</strong> {doctor.experience} years</p>
        <p><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
        <p><strong>Rating:</strong> ⭐ {doctor.rating} / 5</p>

        <div style={{ marginTop: "0.5rem" }}>
          {isAvailable ? (
            <span className="badge-available">Available Today</span>
          ) : (
            <span className="badge-unavailable">Not Available</span>
          )}

          {doctor.experience >= 10 && (
            <span className="badge-senior">Senior Doctor</span>
          )}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
        <Link
          to={`/doctors/${doctor.id}`}
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "#0284c7",
            fontWeight: 600,
            fontSize: "0.9rem"
          }}
        >
          View Details →
        </Link>

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

export default DoctorCard;
