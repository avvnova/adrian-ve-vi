document.addEventListener('DOMContentLoaded', function() {
  // Get all links with data-content attribute
  var contentLinks = document.querySelectorAll("a[data-content]");

  // Add click event listener to each link
  for (let i = 0; i < contentLinks.length; i++) {
    contentLinks[i].addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      
      // Get the content identifier from the clicked link
      var contentId = e.target.dataset.content;
      
      // Find the parent tab-content element
      var parentTabContent = findParentByClass(e.target, 'tab-content');
      
      if (parentTabContent) {
        // Hide all content sections within this tab only
        var allSections = parentTabContent.querySelectorAll(".content-section");
        for (let j = 0; j < allSections.length; j++) {
          allSections[j].style.display = "none";
        }
        
        // Show the selected content section within this tab
        var targetSection = parentTabContent.querySelector(".content-section[data-section='" + contentId + "']");
        if (targetSection) {
          targetSection.style.display = "block";
        }
        
        // Highlight the active link within this tab only
        var tabLinks = parentTabContent.querySelectorAll("a[data-content]");
        for (let j = 0; j < tabLinks.length; j++) {
          tabLinks[j].classList.remove("active-content");
        }
        e.target.classList.add("active-content");
      }
    });
  }

  // Set up default content sections for each tab
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function(tabContent) {
    // Find the first content section in this tab
    var firstSection = tabContent.querySelector(".content-section");
    if (firstSection) {
      // Show the first section by default
      firstSection.style.display = "block";
      
      // Get the section ID
      var sectionId = firstSection.dataset.section;
      
      // Find and highlight the corresponding link
      var correspondingLink = tabContent.querySelector("a[data-content='" + sectionId + "']");
      if (correspondingLink) {
        correspondingLink.classList.add("active-content");
      }
    }
  });
});

// Helper function to find parent element with specific class
function findParentByClass(element, className) {
  while (element && !element.classList.contains(className)) {
    element = element.parentElement;
  }
  return element;
}
