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
