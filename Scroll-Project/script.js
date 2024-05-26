document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const id = this.getAttribute('href').substring(1);
            const target = document.getElementById(id);

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
