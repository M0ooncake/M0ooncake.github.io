// Smooth scrolling functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');

    const isInView = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    const animateSections = () => {
        sections.forEach(section => {
            if (isInView(section)) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateSections);
    animateSections();  // Ensure sections are animated when first loaded
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Toggle dropdown visibility on button click
    dropdown.addEventListener('click', function(e) {
        // Prevent event from bubbling up
        e.stopPropagation();

        // Toggle the visibility of the dropdown
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside of it
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});


