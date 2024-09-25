const MenuItem = require("../models/menu_items");

// Location Controllers
const menu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
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
    res.render("menu", { title: "Our Menu", menuCategories, page: "menu" });
  } catch (error) {
    res.render("error", { message: "Could not load menu items" });
  }
};

const home = (req, res) => {
  res.render("home", { title: "Restaurant Home", page: "home" });
};

const blog = (req, res) => {
  res.render("blog", { title: "Blog", page: "blog" });
};

const about = (req, res) => {
  res.render("about", { title: "About", page: "about" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contact", page: "contact" });
};

module.exports = {
  menu,
  home,
  blog,
  about,
  contact,
};
