const index = (req, res) => {
  res.render("index", { title: "Restaurant Home" });
};

module.exports = {
  index,
};
