const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
// const bookingsController = require("../controllers/bookings");
const {
  bookTableForm,
  bookTableSubmit,
  bookingConfirmation,
} = require("../controllers/bookings");

// General pages
router.get("/cart", (req, res) => {
  res.render("cart", { title: "Cart" });
});
router.get("/", ctrlLocations.home);
router.get("/menu", ctrlLocations.menu);
router.get("/contact", ctrlLocations.contact);
router.get("/about", ctrlLocations.about);
router.get("/blog", ctrlLocations.blog);

// Booking routes
// router.get("/book-table", (req, res) => {
//   res.render("book-table", { title: "Book a Table" });
// });

router.get("/book-table", bookTableForm);

// Handle form submission
router.post("/book-table-submit", bookTableSubmit);

// Render the booking confirmation
router.get("/booking-confirmation", bookingConfirmation);

module.exports = router;
