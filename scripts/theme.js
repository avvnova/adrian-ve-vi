/**
 * Theme switching functionality
 * This script handles theme selection and persistence
 */

// Initialize theme functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcher = document.getElementById('elements');
  const themeButtons = themeSwitcher.querySelectorAll('button[data-theme]');

  const handleThemeSelection = (event) => {
    const target = event.target;
    const theme = target.getAttribute('data-theme');
    document.documentElement.setAttribute("data-selected-theme", theme);
    
    // Update aria-pressed states
    const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
    if (previouslyPressedButton) {
      previouslyPressedButton.setAttribute('aria-pressed', 'false');
    }
    target.setAttribute('aria-pressed', 'true');

    // Save theme preference
    localStorage.setItem('selected-theme', theme);
  }

  // Apply saved theme if available
  const savedTheme = localStorage.getItem('selected-theme');
  const defaultTheme = 'blossom-orange';

  if (savedTheme) {
    const themeButton = document.querySelector(`[data-theme="${savedTheme}"]`);
    if (themeButton) {
      const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
      if (previouslyPressedButton) {
        previouslyPressedButton.setAttribute('aria-pressed', 'false');
      }
      themeButton.setAttribute('aria-pressed', 'true');
      document.documentElement.setAttribute("data-selected-theme", savedTheme);
    }
  }

  // Add event listeners to theme buttons
  themeButtons.forEach(button => {
    button.addEventListener('click', handleThemeSelection);
  });
});
