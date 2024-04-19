document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScrolling();
    enhanceInteractiveElements();
    setupBackToTopButton();

    // Function to enable smooth scrolling for anchor links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Function to enhance interactive elements with keyboard accessibility and visual cues
    function enhanceInteractiveElements() {
        document.querySelectorAll('.interactive').forEach(item => {
            // Ensure all interactive items are focusable
            item.setAttribute('tabindex', '0');

            // Optional: Add hover or focus styles dynamically
            item.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f1faee'; // Lighter background on hover
            });
            item.addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Revert background color on mouse out
            });

            // Adding keyboard interaction: activating clickable actions via Enter key
            item.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.click();
                }
            });
        });
    }

    // Function to show a back-to-top button when scrolling down
    function setupBackToTopButton() {
        const backToTopButton = document.getElementById('back-to-top');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) { // Show button after 300px of scrolling
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
