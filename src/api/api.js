const API_BASE_URL = "https://api.thealphadent.com/api/public";
const CLINIC_ID = "65f2b8f1c4a3b72ef8a1d2e3"; // ✅ Move this to .env for production
const BASE_URL = API_BASE_URL;

export const SEND_ENQUIRY_EMAIL = `${BASE_URL}/send-enquiry-email`;

// Book Appointment API Function
export const bookAppointment = async (collection) => {
  try {
    console.log("📅 Sending booking request:", collection);

    const response = await fetch(`${API_BASE_URL}/book-appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Clinic-ID": CLINIC_ID,
      },
      body: JSON.stringify(collection),
    });

    console.log("📡 Status Code:", response.status);

    const result = await response.json();

    if (!response.ok) {
      const error = new Error(result?.message || `Booking failed with status ${response.status}`);
      error.status = response.status;
      throw error;
    }

    if (response.status === 202) {
      console.log("✅ Booking Accepted (202)");
    }

    console.log("✅ Booking API Response:", result);
    return result;
  } catch (error) {
    console.error("❗ Booking API Error:", {
      message: error.message,
      status: error.status || "N/A",
      collection,
    });
    throw error;
  }
};

// Enquiry API Function (Optional - if you want to convert Contact Form into function like above)
export const sendEnquiry = async (formData) => {
  try {
    console.log("📬 Sending enquiry:", formData);

    const response = await fetch(SEND_ENQUIRY_EMAIL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Clinic-ID": "65f2b8f1c4a3b72ef8a1d2e3",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      const error = new Error(result?.message || `Enquiry failed with status ${response.status}`);
      error.status = response.status;
      throw error;
    }

    console.log("✅ Enquiry API Response:", result);
    return result;
  } catch (error) {
    console.error("❗ Enquiry API Error:", error);
    throw error;
  }
};

export { CLINIC_ID };
