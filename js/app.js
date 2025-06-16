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


function isElementInViewport(el) {
    return el.getBoundingClientRect().top <= window.innerHeight && el.getBoundingClientRect().bottom >= 0;
}

function handleScroll() {
    document.querySelectorAll('section').forEach(section => {
        if (!isElementInViewport(section)) return;
        if (section.classList.contains('typing')) return;

        section.classList?.add('typing');

        fetch(`/section/${section.id}.html`)
            .then(res => res.text())
            .then(html => typing(section, html, 10))
            .catch(err => console.error(`Failed to load section: ${section.id}`, err));

    });
}

window.addEventListener('DOMContentLoaded', handleScroll);