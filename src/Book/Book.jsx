import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Book.css";
import { bookAppointment } from '../api/api'

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTransgender,
  FaCalendarAlt,
  FaClock,
  FaTooth,
  FaStickyNote,
} from "react-icons/fa";

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: null,
    phone: "",
    gender: "",
    date: null,
    time: "",
    service: "",
    note: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingSummary, setBookingSummary] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, "");
      if (newValue.length > 10) {
        setErrorMessage("Phone number must be 10 digits.");
        return;
      }
    }

    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrorMessage("Invalid email format.");
    } else {
      setErrorMessage("");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setIsLoading(true);
    setBookingSummary(null);

    try {
      const { date, time, firstName, lastName, email, dob, phone, gender, service, note } = formData;

      // Validate required fields
      if (!firstName || !lastName || !email || !phone || !gender || !date || !time || !service) {
        setErrorMessage("Please fill out all required fields.");
        setIsLoading(false);
        return;
      }

      // Format scheduled time
      const formattedScheduledTime = date && time
        ? new Date(`${date.toDateString()} ${time}`).toISOString()
        : null;
      if (!formattedScheduledTime) {
        setErrorMessage("Invalid date or time selected.");
        setIsLoading(false);
        return;
      }

      const selectedSlot = time;

      // Prepare collection object
      const collection = {
        scheduledTime: formattedScheduledTime,
        selectedSlot,
        firstName,
        lastName,
        email,
        dob: dob ? new Date(dob).toISOString() : null,
        mobileNumber: phone,
        gender,
        service,
        description: note,
      };
      console.log("Submitting collection:", collection);

      const result = await bookAppointment(collection);

      setSuccessMessage("Booking has been successfully made!");
      setErrorMessage("");
      setBookingSummary(collection); // Store booking details for summary
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        dob: null,
        phone: "",
        gender: "",
        date: null,
        time: "",
        service: "",
        note: "",
      });
    } catch (error) {
      console.error("Booking failed:", {
        message: error.message,
        status: error.status,
      });
      setErrorMessage(error.message || "Failed to book appointment. Please try again.");
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="book-appointment-container fade-in">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-row">
          <div className="input-icon">
            <FaUser />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-icon">
            <FaUser />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-icon">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-icon">
            <FaCalendarAlt />
            <DatePicker
              selected={formData.dob}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, dob: date }))
              }
              placeholderText="Date of Birth"
              className="date-picker"
              maxDate={new Date()}
              showYearDropdown
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-icon">
            <FaPhone />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-icon">
            <FaTransgender />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="input-icon">
            <FaCalendarAlt />
            <DatePicker
              selected={formData.date}
              onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
              placeholderText="Appointment Date"
              className="date-picker"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>
          <div className="input-icon">
            <FaClock />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="input-icon">
            <FaTooth />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="General">General</option>
              <option value="Whitening">Whitening</option>
              <option value="Aligners">Aligners</option>
              <option value="Root Canal">Root Canal</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Extraction">Extraction</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="input-icon full">
            <FaStickyNote />
            <textarea
              name="note"
              placeholder="Note to the doctor (Optional)"
              rows={4}
              value={formData.note}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {successMessage && (
          <div className="alert success">
            <strong>Success!</strong> {successMessage}
            <button onClick={() => setSuccessMessage("")}>×</button>
          </div>
        )}
        {errorMessage && (
          <div className="alert error">
            <strong>Oops!</strong> {errorMessage}
            <button onClick={() => setErrorMessage("")}>×</button>
          </div>
        )}
      </form>

      {bookingSummary && (
        <div className="booking-summary" style={{ marginTop: '20px' }}>
          <h3>Booking Summary</h3>
          <p><strong>Name:</strong> {bookingSummary.firstName} {bookingSummary.lastName}</p>
          <p><strong>Email:</strong> {bookingSummary.email}</p>
          <p><strong>Service:</strong> {bookingSummary.service}</p>
          <p><strong>Date:</strong> {new Date(bookingSummary.scheduledTime).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</p>
          <p><strong>Time:</strong> {new Date(bookingSummary.scheduledTime).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}</p>
          <p><strong>Gender:</strong> {bookingSummary.gender}</p>
          <p><strong>Phone:</strong> {bookingSummary.mobileNumber}</p>
          {bookingSummary.description && (
            <p><strong>Note:</strong> {bookingSummary.description}</p>
          )}
          <button
            className="submit-btn"
            style={{ marginTop: '10px' }}
            onClick={() => setBookingSummary(null)}
          >
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;