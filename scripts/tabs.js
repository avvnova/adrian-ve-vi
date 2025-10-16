var origins = document.querySelectorAll("button[data-origin]");

for (let i = 0; i < origins.length; i++) {
  origins[i].addEventListener('click', function(e) {
      // Get all elements with data-origin defined
      var allOrigins = document.querySelectorAll("*[data-origin]");             
      for (i = 0; i < allOrigins.length; i++) {
          allOrigins[i].classList.remove("active");
      }
      
      // Get all elements with data-target defined
      var allTargets = document.querySelectorAll("*[data-target]");
      for (i = 0; i < allTargets.length; i++) {
          allTargets[i].style.display = "none";
      }
      
      //Only get elements of which the data-target attribute matches the value of the data-origin of the clicked  element
      var targets = document.querySelectorAll("*[data-target='"+e.target.dataset.origin+"']");   
      for (i = 0; i < targets.length; i++) {
          targets[i].style.display = "grid";      
      }
      
      e.target.classList.add("active");
  });
}