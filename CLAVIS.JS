const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animation when visible
        } else {
            entry.target.classList.remove('animate'); // Remove animation when not visible
        }
    });
}, {
    threshold: 0.5
}); // Trigger when 50% of the element is visible

document.querySelectorAll('.feature-item, .product-item').forEach(item => {
    observer.observe(item);
});
