const { saveBooking, findBookingById } = require("../models/db");

// Render the book table form
const bookTableForm = (req, res) => {
  res.render("book-table", { title: "Book a Table" });
};

// Handle form submission for booking
const bookTableSubmit = async (req, res) => {
  const { name, email, date, time, guests } = req.body;

  // Simple validation to check for missing fields
  if (!name || !email || !date || !time || !guests) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Save the booking data to the database
    const booking = await saveBooking({ name, email, date, time, guests });

    if (booking === -1) {
      return res.status(500).send("Error saving your booking.");
    }

    // Store booking details in the session for the confirmation page
    req.session.bookingId = booking._id;

    // Redirect to the confirmation page with booking ID as query param
    res.redirect(`/booking-confirmation?id=${booking._id}`);
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).send("Error saving your booking.");
  }
};

// Render the booking confirmation page
const bookingConfirmation = async (req, res) => {
  const { bookingId } = req.session;
  const queryBookingId = req.query.id;

  // If no booking ID found in session or query, redirect to booking page
  if (!bookingId && !queryBookingId) {
    return res.redirect("/book-table");
  }

  try {
    // Retrieve booking details, either from session or query param
    const bookingDetails = await findBookingById(bookingId || queryBookingId);

    if (!bookingDetails) {
      return res.status(404).send("Booking not found.");
    }

    // Render confirmation page with the booking details
    res.render("booking-confirmation", {
      title: "Booking Confirmed",
      bookingDetails,
    });
  } catch (err) {
    console.error("Error fetching booking details:", err);
    res.status(500).send("Error loading your booking confirmation.");
  }
};

// Render the booking confirmation page

module.exports = {
  bookTableForm,
  bookTableSubmit,
  bookingConfirmation,
};
