// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for the hero section
    const heroSection = document.getElementById('home');
    
    // Only apply the effect on non-touch devices to prevent issues on mobile
    if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
        // Create background element
        const heroBg = document.createElement('div');
        heroBg.className = 'parallax-bg';
        
        // Get the background image from the section's style
        const bgImage = window.getComputedStyle(heroSection).backgroundImage;
        heroBg.style.backgroundImage = bgImage;
        
        // Clear the background from the section
        heroSection.style.backgroundImage = 'none';
        
        // Add the background element to the section
        heroSection.insertBefore(heroBg, heroSection.firstChild);
        
        // Add scroll event listener
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            // Apply the parallax effect with reduced intensity and bounds
            const maxScroll = 100; // Maximum parallax scroll in pixels
            const scrollAmount = Math.min(scrollPosition * 0.3, maxScroll);
            heroBg.style.transform = `translateY(${scrollAmount}px)`;
        });
    }

    // Impressum Modal functionality
    const impressumLink = document.getElementById('impressumLink');
    const impressumModal = document.getElementById('impressumModal');
    const closeImpressum = document.getElementById('closeImpressum');
    const closeImpressumBtn = document.getElementById('closeImpressumBtn');
    
    // Only proceed if all elements exist
    if (impressumLink && impressumModal && closeImpressum && closeImpressumBtn) {
        function toggleImpressum(e) {
            if (e) e.preventDefault();
            impressumModal.classList.toggle('hidden');
            document.body.style.overflow = impressumModal.classList.contains('hidden') ? '' : 'hidden';
        }
        
        // Add event listeners
        impressumLink.addEventListener('click', toggleImpressum);
        closeImpressum.addEventListener('click', toggleImpressum);
        closeImpressumBtn.addEventListener('click', toggleImpressum);
        
        // Close modal when clicking outside content
        impressumModal.addEventListener('click', function(e) {
            if (e.target === impressumModal) {
                toggleImpressum(e);
            }
        });
        
        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !impressumModal.classList.contains('hidden')) {
                toggleImpressum(e);
            }
        });
    }
});
