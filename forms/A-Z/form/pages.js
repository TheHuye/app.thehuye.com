function nextSection(currentSection) {
    event.preventDefault();
    const nextSection = document.getElementById('section' + (currentSection + 1));
    if (nextSection) {
        document.getElementById('section' + currentSection).classList.remove('active');
        nextSection.classList.add('active');
    }
}

function prevSection(currentSection) {
    event.preventDefault();
    const prevSection = document.getElementById('section' + (currentSection - 1));
    if (prevSection) {
        document.getElementById('section' + currentSection).classList.remove('active');
        prevSection.classList.add('active');
    }
}