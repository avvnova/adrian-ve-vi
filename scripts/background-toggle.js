function freezeBackground() {
    const checkbox = document.getElementById('bg-toggle');
    const marquee = document.getElementById('marquee-container');

    document.body.classList.toggle('freezer-on', checkbox.checked);
    document.body.classList.toggle('freezer-off', !checkbox.checked);

    if (marquee) {
        marquee.classList.toggle('marquee', checkbox.checked);
    }
}

// Set initial state on load
window.addEventListener('load', () => {
    const checkbox = document.getElementById('bg-toggle');
    const marquee = document.getElementById('marquee-container');
    if (checkbox) {
        document.body.classList.toggle('freezer-on', checkbox.checked);
        document.body.classList.toggle('freezer-off', !checkbox.checked);
        if (marquee) {
            marquee.classList.toggle('marquee', checkbox.checked);
        }
    }
});
