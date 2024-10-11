const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
const bookingsController = require("../controllers/bookings");

// General pages
router.get("/cart", (req, res)=>{res.render("cart", { title: "Cart" })})
router.get("/", ctrlLocations.home);
router.get("/menu", ctrlLocations.menu);
router.get("/contact", ctrlLocations.contact);
router.get("/about", ctrlLocations.about);
router.get("/blog", ctrlLocations.blog);
router.get("bookTableSubmit", ctrlLocations.bookTableSubmit);

// Booking routes
router.get("/book-table", (req, res) => {
  res.render("book-table", { title: "Book a Table" });
});

router.post("/book-table-submit", bookingsController.bookTable);

router.get("/booking-confirmation", (req, res) => {
  res.render("booking-confirmation", { title: "Booking Confirmed" });
});

module.exports = router;
