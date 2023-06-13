     // Add click event listener to the "Add to Cart" buttons
     const addToCartButtons = document.querySelectorAll('.add-to-cart');
     addToCartButtons.forEach(button => {
       button.addEventListener('click', addToCart);
     });
 
     // Update the cart count on the cart logo
     function updateCartCount() {
       const cartCountElement = document.getElementById('cart-count');
       cartCountElement.innerText = cart.length;
     }
     
    // Function to update the cart items on the cart.html page
    function updateCart() {
        const cartItemsList = document.getElementById('cart-items-list');
        const cartTotalElement = document.getElementById('cart-total');
  
        // Clear the cart items list
        cartItemsList.innerHTML = '';
  
        // Calculate the total price
        let total = 0;
  
        // Iterate over each item in the cart
        cart.forEach(item => {
          // Create a new list item for the cart item
          const li = document.createElement('li');
          li.innerText = `${item.name}  $${item.price}`;
  
          // Add the list item to the cart items list
          cartItemsList.appendChild(li);
  
          // Update the total price
          total += item.price;
        });
  
        // Update the total price element
        cartTotalElement.innerText = total.toFixed(2);
      }
  
     
// Array to store the cart items
let cart = [];

// Function to add a product to the cart
function addToCart() {
  const product = {
    name: 'Product Name'
  };

  cart.push(product);
  updateCartCount();
}

// Function to update the cart count on the cart logo
function updateCartCount() {
  // Update the cart count on the cart logo in index.html
  const cartCountElement = parent.document.getElementById('cart-count');
  cartCountElement.innerText = cart.length;
}

function clearCart() {
    cart = [];
    updateCart();
  }
  
  // Add click event listener to the "Clear Cart" button
  clearCartButton.addEventListener('click', clearCart);

