function freezeBackground() {
    const checkbox = document.getElementById('bg-toggle');
    if (checkbox.checked) {
        document.body.style.backgroundImage = 'var(--background-gif)';
    } else {
        document.body.style.backgroundImage = 'var(--background-jpg)';
    }
}