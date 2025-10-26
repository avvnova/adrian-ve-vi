const themeSwitcher =document.querySelector('.theme-dropdown');
const buttons = themeSwitcher.querySelectorAll('button');

const handleThemeSelection = (event) => {
  const target = event.target;
  const theme = target.getAttribute('data-theme');
  const isPressed = target.getAttribute('aria-pressed');
  document.documentElement.setAttribute("data-selected-theme", theme);
  
  const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
  previouslyPressedButton.setAttribute('aria-pressed', false);
  target.setAttribute('aria-pressed', 'true');

  localStorage.setItem('selected-theme', theme);
}

const savedTheme = localStorage.getItem('selected-theme');
const defaultTheme = 'blossom-orange';

if (savedTheme && savedTheme !== defaultTheme) {
  const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
  previouslyPressedButton.setAttribute('aria-pressed', false);
  document.querySelector(`[data-theme="${savedTheme}"]`).setAttribute('aria-pressed', true);
  document.documentElement.setAttribute("data-selected-theme", savedTheme);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFn() {
  document.getElementById("themes").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("theme-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

buttons.forEach(button => {
  button.addEventListener('click', handleThemeSelection);
  });

