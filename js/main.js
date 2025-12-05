// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for the hero section
    const heroSection = document.getElementById('home');
    
    // Only apply the effect on non-touch devices to prevent issues on mobile
    if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
        window.addEventListener('scroll', function() {
            // Calculate the scroll position
            const scrollPosition = window.pageYOffset;
            // Apply the parallax effect (slower movement for background)
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
});
