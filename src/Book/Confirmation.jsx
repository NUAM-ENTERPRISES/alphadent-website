import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const { bookingDetails } = state || {};

  // Format date and time separately
  const formattedDate = bookingDetails?.scheduledTime
    ? new Date(bookingDetails.scheduledTime).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";
  const formattedTime = bookingDetails?.scheduledTime
    ? new Date(bookingDetails.scheduledTime).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "N/A";

  return (
    <div className="book-appointment-container">
      <h2>Booking Confirmation</h2>
      {bookingDetails ? (
        <div className="booking-summary">
          <h3>Appointment Details</h3>
          <p><strong>Name:</strong> {bookingDetails.firstName} {bookingDetails.lastName}</p>
          <p><strong>Email:</strong> {bookingDetails.email}</p>
          <p><strong>Service:</strong> {bookingDetails.service}</p>
          <p><strong>Date:</strong> {formattedDate}</p>
          <p><strong>Time:</strong> {formattedTime}</p>
          <p><strong>Gender:</strong> {bookingDetails.gender}</p>
          <p><strong>Phone:</strong> {bookingDetails.mobileNumber}</p>
          {bookingDetails.description && (
            <p><strong>Note:</strong> {bookingDetails.description}</p>
          )}
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
    </div>
  );
};

export default Confirmation;