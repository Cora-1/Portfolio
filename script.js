// Intersection Observer API for smooth scroll-reveal animations
document.addEventListener("DOMContentLoaded", () => {
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element scrolls into view, add the 'show' class
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Unobserve the element if you only want it to animate once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the 'hidden' class and apply the observer
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});
