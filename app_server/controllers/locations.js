 const {getMenu, saveBooking} = require('../models/db')

// Controller to display the menu
const menu = async (req, res) => {
  try {
    // Fetch all menu items from the database
    const menuItems = await getMenu();

    // Organize menu items into categories
    const menuCategories = [
      {
        name: "Breakfast",
        items: menuItems.filter((item) => item.category === "Breakfast"),
      },
      {
        name: "Main Menu",
        items: menuItems.filter((item) => item.category === "Main Menu"),
      },
      {
        name: "Dessert",
        items: menuItems.filter((item) => item.category === "Dessert"),
      },
      {
        name: "Beverage",
        items: menuItems.filter((item) => item.category === "Beverage"),
      },
    ];

    // Render the 'menu' view and pass the categorized menu items
    res.render("menu", { title: "Our Menu", menuCategories, page: "menu" });
  } catch (error) {
    // Log any error and render the error page
    console.error("Error loading menu items:", error);
    res.render("error", { message: "Could not load menu items" });
  }
};

// Home page controller
const home = (req, res) => {
  res.render("home", { title: "Restaurant Home", page: "home" });
};

// Blog page controller
const blog = (req, res) => {
  res.render("blog", { title: "Blog", page: "blog" });
};

// About page controller
const about = (req, res) => {
  res.render("about", { title: "About", page: "about" });
};

// Contact page controller
const contact = (req, res) => {
  res.render("contact", { title: "Contact", page: "contact" });
};

// Render the book table view
const bookTable = (req, res) => {
  res.render("book-table", { title: "Book a Table" });
};

// Handle the form submission for table booking
const bookTableSubmit = async (req, res) => {
  const { name, email, date, time, guests } = req.body;

  // Check for missing required fields
  if (!name || !email || !date || !time || !guests) {
    console.error("Missing required fields:", req.body);
    return res.status(400).send("Missing required fields.");
  }

  try {
    // Save the booking and redirect to the confirmation page
    await saveBooking({ name, email, date, time, guests });
    res.redirect("/booking-confirmation");
  } catch (err) {
    // Log error and send a server error response
    console.error("Error saving booking:", err);
    res.status(500).send("Error saving booking.");
  }
};

// Render the booking confirmation page
// const bookingConfirmation = (req, res) => {
//   res.render("booking-confirmation", { title: "Booking Confirmed" });
// };
const bookingConfirmation = (req, res) => {
  const bookingDetails = req.session.bookingDetails;

  if (!bookingDetails) {
    return res.redirect("/book-table");
  }

  res.render("booking-confirmation", {
    title: "Booking Confirmed",
    bookingDetails,
  });
};
// Export the controller functions
module.exports = {
  menu,
  home,
  blog,
  about,
  contact,
  bookTable,
  bookTableSubmit,
  bookingConfirmation,
};
