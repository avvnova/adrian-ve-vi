window.onload = function() {
  let pos = 0;
  let logo = document.getElementById("logo");

  setInterval(() => {
    if (pos === 0) {
      logo.style.transform = "rotate(0.10turn)";
      pos = 1;
    } else {
      logo.style.transform = "rotate(-0.10turn)";
      pos = 0;
    }
  }, 1000);
};
