// Simple JavaScript for smooth scrolling - requires a class "smooth-scroll" on the anchor tags
document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollElements = document.querySelectorAll('.smooth-scroll');

    smoothScrollElements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
