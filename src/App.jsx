import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import initialDoctors from "./data/doctors";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DoctorList from "./pages/DoctorList";
import DoctorDetails from "./pages/DoctorDetails";
import Appointments from "./pages/Appointments";
import "./App.css";

function App() {
  const [doctors, setDoctors] = useState(initialDoctors);

  // Book appointment: isBooked -> true, availableSlots -> availableSlots - 1
  const handleBook = (id) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) => {
        if (
          doc.id === id &&
          doc.isAvailableToday &&
          doc.availableSlots > 0 &&
          !doc.isBooked
        ) {
          return {
            ...doc,
            isBooked: true,
            availableSlots: doc.availableSlots - 1
          };
        }
        return doc;
      })
    );
  };

  // Cancel appointment: isBooked -> false, availableSlots -> availableSlots + 1
  const handleCancel = (id) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) => {
        if (doc.id === id && doc.isBooked) {
          return {
            ...doc,
            isBooked: false,
            availableSlots: doc.availableSlots + 1
          };
        }
        return doc;
      })
    );
  };

  const bookedCount = doctors.filter((doc) => doc.isBooked).length;

  return (
    <BrowserRouter>
      <Navbar bookedCount={bookedCount} />
      <Routes>
        <Route path="/" element={<Home doctors={doctors} />} />
        <Route
          path="/doctors"
          element={
            <DoctorList
              doctors={doctors}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />
        <Route
          path="/doctors/:id"
          element={
            <DoctorDetails
              doctors={doctors}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />
        <Route
          path="/appointments"
          element={
            <Appointments
              doctors={doctors}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
