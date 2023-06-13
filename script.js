
var searchBtn = document.getElementById('search-btn');
var searchContainer = document.querySelector('.search-container');
var closeBtn = document.getElementById('close-btn');

searchBtn.addEventListener('click', function() {
  searchContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  searchContainer.style.display = 'none';
});


  
