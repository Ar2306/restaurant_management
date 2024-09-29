const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
const bookingsController = require("../controllers/bookings");
const Booking = require("../models/booking");

// General pages
router.get("/", ctrlLocations.home);
router.get("/menu", ctrlLocations.menu);
router.get("/contact", ctrlLocations.contact);
router.get("/about", ctrlLocations.about);
router.get("/blog", ctrlLocations.blog);

// // Booking routes
// router.get("/book-table", (req, res) => {
//   res.render("book-table", { title: "Book a Table" });
// });

// router.post("/book-table-submit", bookingsController.bookTable);

// router.get("/booking-confirmation", (req, res) => {
//   res.render("booking-confirmation", { title: "Booking Confirmed" });
// });

// Route to render the booking form
router.get("/book-table", (req, res) => {
  res.render("book-table", { title: "Book a Table" });
});

// Route to handle form submission
router.post("/book-table-submit", async (req, res) => {
  const { name, email, date, time, guests } = req.body;

  // Check for missing required fields
  if (!name || !email || !date || !time || !guests) {
    return res.status(400).send("Missing required fields.");
  }

  // Create a new booking object
  const newBooking = new Booking({ name, email, date, time, guests });

  try {
    // Save the booking to the database
    await newBooking.save();
    res.redirect("/booking-confirmation"); // Redirect to a confirmation page
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).send("Error saving booking.");
  }
});

// Confirmation route
router.get("/booking-confirmation", (req, res) => {
  res.send("Your booking has been confirmed!");
});

// Authentication routes
router.get("/signup", (req, res) => {
  res.render("signup", { title: "Create Account", page: "signup" });
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  // You should add user registration logic here
  res.redirect("/signin");
});

router.get("/signin", (req, res) => {
  res.render("signin", { title: "Sign In", page: "signin" });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  // You should add user authentication logic here
  res.redirect("/");
});

module.exports = router;
