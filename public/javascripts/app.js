//--------menu page javascript
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuNav = document.querySelector(".menu-nav");

  hamburger.addEventListener("click", () => {
    menuNav.style.display =
      menuNav.style.display === "none" || menuNav.style.display === ""
        ? "block"
        : "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const categoryBoxes = document.querySelectorAll(".category-box");
  const menuSections = document.querySelectorAll(".menu-container .row");

  categoryBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterMenuByCategory(category);
      activateCategoryBox(this);
    });
  });

  function filterMenuByCategory(category) {
    menuSections.forEach((section) => {
      const categoryTitle = section.previousElementSibling;
      if (category === "all" || categoryTitle.id === category) {
        section.style.display = "flex";
        categoryTitle.style.display = "block";
      } else {
        section.style.display = "none";
        categoryTitle.style.display = "none";
      }
    });
  }

  function activateCategoryBox(activeBox) {
    categoryBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    activeBox.classList.add("active");
  }

  activateCategoryBox(categoryBoxes[0]);
  filterMenuByCategory(categoryBoxes[0].getAttribute("data-category"));
});
document.addEventListener("DOMContentLoaded", function () {
  const addToCartForms = document.querySelectorAll(".add-to-cart-form");

  addToCartForms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form); // Collect form data
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Send an AJAX request to add the item to the cart
      fetch("/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the form data as JSON
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Item has been added to the cart");
            // Optionally, update cart UI dynamically here
          } else {
            alert("Error adding item to cart");
          }
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    });
  });
});
