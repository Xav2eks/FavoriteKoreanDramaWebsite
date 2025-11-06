const addBtn = document.getElementById("addBtn");
const inputTitle = document.getElementById("input-title");
const inputDescription = document.getElementById("input-description");
const inputImage = document.getElementById("input-image");
const leftContainer = document.querySelector(".left-container");
const cartTotal = document.querySelector(".total-items");
const cartList = document.querySelector(".cart-list");
const saveBtn = document.querySelector(".save-btn");
const clearCart = document.querySelector(".clear-btn");

let totalItems = 0;

addBtn.addEventListener("click", function () {
  if (
    inputTitle.value === "" ||
    inputDescription.value === "" ||
    inputImage.value === ""
  ) {
    alert("Please fill in all fields before adding a drama.");
  } else {
    const title = inputTitle.value;
    const description = inputDescription.value;
    const imageUrl = inputImage.value;

    const dramaCard = document.createElement("div");
    dramaCard.className = "drama-card";

    dramaCard.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="btn-container">
          <button class="add-to-favorites-btn">ADD TO FAVORITES</button>
          <button class="remove-btn">REMOVE</button>
      </div>
    `;

    leftContainer.appendChild(dramaCard);

    inputTitle.value = "";
    inputDescription.value = "";
    inputImage.value = "";

    const removeBtn = dramaCard.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
      dramaCard.remove();
    });

    const addToFavorites = dramaCard.querySelector(".add-to-favorites-btn");

    addToFavorites.addEventListener("click", function () {
      const existingItems = cartList.querySelectorAll(".cart-title");
      let alreadyExists = false;

      for (let i = 0; i < existingItems.length; i++) {
        if (existingItems[i].textContent === title) {
          alreadyExists = true;
          break;
        }
      }

      if (alreadyExists) {
        alert(title + " is already in your favorites");
      } else {
        totalItems++;
        cartTotal.innerText = "Total Items: " + totalItems;

        const dramaCart = document.createElement("div");
        dramaCart.className = "drama-cart";

        dramaCart.innerHTML = `
        <h4 class="cart-title">${title}</h4>
        <button class="remove-btn">DELETE</button>
        `;

        cartList.appendChild(dramaCart);

        const removeBtn = dramaCart.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function () {
          dramaCart.remove();
          totalItems--;
          cartTotal.innerText = "Total Items: " + totalItems;
        });
      }
    });
  }
});

saveBtn.addEventListener("click", function () {
  if (totalItems != 0) {
    let confirmWindow = confirm(
      "Are you sure want to save it to your local drive?"
    );
    if (confirmWindow == true) {
      alert("Saved Successfully, check your folders!");
      cartList.innerHTML = ``;
      totalItems = 0;
      cartTotal.innerText = `Total Items: ${totalItems}`;
    } else {
      alert("Cancelled successfully!");
    }
  } else {
    alert("You do not have any items in your cart!");
  }
});

clearCart.addEventListener("click", function () {
  if (totalItems != 0) {
    let confirmWindow = confirm(
      "Are you sure want to clear your favorites cart?"
    );
    if (confirmWindow == true) {
      cartList.innerHTML = ``;
      totalItems = 0;
      cartTotal.innerText = `Total Items: ${totalItems}`;
    } else {
      alert("Cancelled successfully!");
    }
  } else {
    alert("You do not have any items in your cart!");
  }
});
