

//search 
// Get the search input element and search button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

// Add event listener to the search button
searchButton.addEventListener('click', searchProducts);

// Function to perform the search
function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const products = document.querySelectorAll('.card');

  products.forEach((product) => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}



  
