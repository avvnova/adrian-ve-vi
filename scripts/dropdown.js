/**
 * Generic dropdown functionality
 * This script handles showing/hiding dropdown menus
 */

/* When the user clicks on a dropdown button,
toggle between hiding and showing the dropdown content */
function dropdownFn(event) {
  // Get the dropdown list that is a sibling of the clicked button
  const button = event.currentTarget;
  const dropdownList = button.nextElementSibling;
  
  // Toggle the show class on the dropdown list
  dropdownList.classList.toggle("show");
  
  // Prevent the event from bubbling up to the window
  event.stopPropagation();
}

// Close all dropdowns when clicking outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdowns = document.getElementsByClassName("dropdown-list");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

// Initialize all dropdown buttons
document.addEventListener('DOMContentLoaded', function() {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  
  dropdownButtons.forEach(button => {
    button.addEventListener('click', dropdownFn);
  });
});
