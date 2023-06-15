// Initialize the product data as an array of objects
const products = [
  {
    id:1,
    image: "./images/product1.jpg",
    name: "Product 1",
    price: "10.00",
  },
  {
    id:2,
    image: "./images/product2.jpg",
    name: "Product 2",
    price: "15.00",
  },
  {
    id:3,
    image: "./images/product3.jpg",
    name: "Product 3",
    price: "15.00",
  },
  {
    id:4,
    image: "./images/product4.jpg",
    name: "Product 4",
    price: "15.00",
  },
  {
    id:5,
    image: "./images/product5.jpg",
    name: "Product 5",
    price: "15.00",
  },
  {
    id:6,
    image: "./images/product6.jpg",
    name: "Product 6",
    price: "15.00",
  },
];

// Function to generate the HTML for each product
function generateProductHTML(product) {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
    </div>
  `;
}

// Function to render the products in the UI
function renderProducts() {
  const productsContainer = document.querySelector(".products");

  // Generate the HTML for each product and add it to the container
  products.forEach((product) => {
    const productHTML = generateProductHTML(product);
    productsContainer.innerHTML += productHTML;
  });

    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const cartCountElement = document.getElementById("cart-count");
      cartCountElement.textContent = cartData.length;
}

// Call the renderProducts function to populate the UI
renderProducts();
