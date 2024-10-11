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
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", async function () {
    const itemId = this.getAttribute("data-item-id");
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId, quantity: 1 }), // Assuming quantity is 1 by default
    });

    const result = await response.json();
    if (result.success) {
      alert("Item added to cart!");
    } else {
      alert("Failed to add item to cart.");
    }
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
// Sample code to update the cart count dynamically
document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0; // Initialize cart count to 0
  const cartCountElement = document.getElementById("cart-count");

  // Example function to add an item to the cart
  function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
  }

  // Attach this function to any add-to-cart buttons in your menu page
});
document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemId = event.target.getAttribute("data-id");
      const quantity = 1; // Default quantity or allow users to choose

      fetch("/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId, quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message); // Show confirmation message
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    });
  });
});
