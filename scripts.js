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

// Existing JavaScript for smooth scrolling...

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function() {
        // Change the theme of the website
        if (this.checked) {
            trans();
            document.body.classList.add('dark-mode');
        } else {
            trans();
            document.body.classList.remove('dark-mode');
        }
    });

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    };
});
