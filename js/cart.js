// Function to handle adding a product to the shopping cart
function addToCart(event) {
  const button = event.target;
  const productId = button.dataset.id;
  const productName = button.dataset.name;
  const productPrice = button.dataset.price;

  // Get the existing cart data from local storage or initialize an empty array
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  const existingProduct = cartData.find((product) => product.id === productId);

  if (existingProduct) {
    // Product already exists in the cart, update the quantity
    existingProduct.quantity += 1;
  } else {
    // Product is not in the cart, add it as a new item
    const newProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    };
    cartData.push(newProduct);
  }

  // Store the updated cart data in local storage
  localStorage.setItem("cart", JSON.stringify(cartData));

  // Update the cart count in the UI
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartData.length;
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});




// Function to render the cart items in the UI
function renderCartItems() {
  // Get the cart data from local storage
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];

  // Get the cart items list element
  const cartItemsList = document.getElementById('cart-items-list');

  // Clear the existing cart items
  cartItemsList.innerHTML = '';

  // Calculate the total price
  let totalPrice = 0;

  // Iterate over each cart item and create the list item element
  cartData.forEach((item) => {
    const listItem = document.createElement('li');

    // Create the image element
    const image = document.createElement('img');
    image.src = `./images/product${item.id}.jpg`; // Replace with the appropriate image URL or path
    image.alt = item.name;
    image.classList.add('cart-item-image');

    // Create the product details
    const productDetails = document.createElement('div');
    productDetails.classList.add('cart-item-details');

    const productName = document.createElement('h3');
    productName.textContent = item.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${item.price}`;

    const productQuantity = document.createElement('p');
    productQuantity.textContent = `Quantity: ${item.quantity}`;

    // Append the image and product details to the list item
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productQuantity);

    listItem.appendChild(image);
    listItem.appendChild(productDetails);

    // Append the list item to the cart items list
    cartItemsList.appendChild(listItem);

    // Calculate the subtotal for the item and update the total price
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
  });

  // Get the cart total element and update the total price
  const cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.textContent = totalPrice.toFixed(2);
}

// Function to clear the cart
function clearCart() {
  // Clear the cart data in local storage
  localStorage.removeItem('cart');

  // Render the updated cart items
  renderCartItems();
}

// Add event listener to the Clear Cart button
const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', clearCart);

// Render the initial cart items
renderCartItems();
