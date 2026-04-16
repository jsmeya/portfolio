const elements = document.querySelectorAll('.fade-in'); // Defining all of the elements with this in their class name

const observer = new IntersectionObserver((entries) => { // Intersection observer basically detects when a given element enters the viewport.
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el))