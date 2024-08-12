const menu = (req, res) => {
  const menuItems = [
    {
      name: "Pizza",
      description: "Delicious cheese pizza",
      price: 9.99,
      image: "pizza.jpg",
    },
    {
      name: "Burger",
      description: "Juicy beef burger",
      price: 8.99,
      image: "burger.jpg",
    },
    {
      name: "Salad",
      description: "Fresh vegetable salad",
      price: 7.99,
      image: "salad.jpg",
    },
  ];

  res.render("menu", { title: "Our Menu", menuItems });
};

const home = (req, res) => {
  res.render("home", { title: "Restaurant Home" });
};
const about = (req, res) => {
  res.render("about", { title: "About" });
};
const contact = (req, res) => {
  res.render("contact", { title: "Contact" });
};
const blog = (req, res) => {
  res.render("blog", { title: "Blog" });
};

module.exports = {
  menu,
  home,
  about,
  contact,
  blog,
};
