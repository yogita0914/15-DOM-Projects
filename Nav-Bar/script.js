document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.link');
    const socialMedia = document.querySelector('.social-media');

    navToggle.addEventListener('click', () => {
        links.classList.toggle('show-links');
        socialMedia.classList.toggle('show-links');
    });
});
