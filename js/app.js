let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // 아래로 스크롤: 헤더 숨김
        header.classList.add('hidden');
    } else {
        // 위로 스크롤: 헤더 표시
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});
