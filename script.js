// Dark mode toggle and autodetect code
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check user's preferred color scheme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply the color mode based on users preference
if (prefersDarkMode) {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️ Toggle on Light Mode (Its Better trsut me)';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update button text to be worky worky
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️ Toggle on Light Mode (Its Better trsut me)';
  } else {
    darkModeToggle.textContent = '🌙 Toggle on Amoled Dark Mode';
  }
});

// Easter egg #1
document.addEventListener('DOMContentLoaded', function() {
  var easterEgg = document.getElementById('footer');

  // Add a click event listener to the easter egg element 
  easterEgg.addEventListener('click', function() {
    // Redirect to 1.html (easter egg)
    window.location.href = 'easteregg/1.html';
  });
});

// popup wip
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var cookiePopup = document.getElementById('Popup');
    cookiePopup.style.display = 'block';
  }, 100); // Adjust the delay (in milliseconds) as per your preference
});

function closePopup() {
  var cookiePopup = document.getElementById('Popup');
  cookiePopup.style.display = 'none';
}

// JS File by Purplebored. https://purplebored.pl