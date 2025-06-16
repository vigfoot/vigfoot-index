let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;

    handleScroll();
});

const loadedSections = new Set();

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function loadSection(section) {
    const id = section.id;
    if (loadedSections.has(id)) return;

    fetch(`/section/${id}.html`)
        .then(res => res.text())
        .then(html => {
            typing(section, html, 10);
            loadedSections.add(id);
        })
        .catch(err => {
            console.error(`Failed to load section: ${id}`, err);
        });
}

function handleScroll() {
    document.querySelectorAll('section').forEach(section => {
        if (isElementInViewport(section)) {
            loadSection(section);
        }
    });
}

window.addEventListener('DOMContentLoaded', handleScroll);