const navLinks = document.querySelectorAll('.site-nav a');

const linkForSection = new Map();
navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) linkForSection.set(section, link);
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const link = linkForSection.get(entry.target);
            if (!link || !entry.isIntersecting) return;

            navLinks.forEach((l) => l.classList.remove('is-active'));
            link.classList.add('is-active');
        });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);

linkForSection.forEach((link, section) => observer.observe(section));
