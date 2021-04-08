function scrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    function scroolToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach((item) => {
        item.addEventListener('click', scroolToSection);
    });
}
scrollSuave();