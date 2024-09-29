exports.bookTable = (req, res) => {
  console.log("Received booking request:", req.body); // Log the request body

  const { name, email, date, time, guests } = req.body;

  // Check for missing required fields
  if (!name || !email || !date || !time || !guests) {
    console.error("Missing required fields:", req.body); // Log missing fields
    return res.status(400).send("Missing required fields.");
  }

  const newBooking = new Booking({ name, email, date, time, guests });

  newBooking
    .save()
    .then(() => {
      res.redirect("/booking-confirmation");
    })
    .catch((err) => {
      console.error("Error saving booking:", err);
      res.status(500).send("Error saving booking.");
    });
};
