window.addEventListener('load', function() {
  let pos = 0;
  let logo = document.getElementById("logo");

  setInterval(() => {
    if (!document.body.classList.contains('freezer-on')) {
      logo.style.transform = "rotate(0turn)";
      return;
    }
    
    if (pos === 0) {
      logo.style.transform = "rotate(0.05turn)";
      pos = 1;
    } else {
      logo.style.transform = "rotate(-0.05turn)";
      pos = 0;
    }
  }, 1000);

  setInterval(() => {
    if (!document.body.classList.contains('freezer-on')) {
        logo.classList.remove("glowing");
        return;
    }
    logo.classList.toggle("glowing");
  }, 2500);
});