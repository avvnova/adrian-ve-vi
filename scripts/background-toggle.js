function freezeBackground() {
    const checkbox = document.getElementById('bg-toggle');

    document.body.classList.toggle('freezer-on', checkbox.checked);
    document.body.classList.toggle('freezer-off', !checkbox.checked);
}
