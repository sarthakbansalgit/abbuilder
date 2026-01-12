// AB Builders - Initialization Script
// Ensures proper page visibility and animations
(function() {
    'use strict';
    // Force body visibility immediately
    const style = document.createElement('style');
    style.textContent = `
        body { display: block !important; visibility: visible !important; opacity: 1 !important; }
        #wrapper { display: block !important; visibility: visible !important; }
        #content { display: block !important; visibility: visible !important; }
        #jpreLoader { display: none !important; }
        html { background: #0a0e27 !important; }
    `;
    document.head.insertBefore(style, document.head.firstChild);
    // Make body immediately visible
    document.documentElement.style.background = '#0a0e27';
    if (document.body) {
        document.body.style.display = 'block';
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
    }
    // Hide preloader
    const preloader = document.getElementById('jpreLoader');
    if (preloader) preloader.style.display = 'none';
    // Ensure wrapper is visible
    const wrapper = document.getElementById('wrapper');
    if (wrapper) {
        wrapper.style.display = 'block';
        wrapper.style.visibility = 'visible';
    }
    // Initialize animations when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Fade in body
        document.body.style.animation = 'fadeInBody 0.8s ease-out';
        // Add animation keyframes
        if (!document.querySelector('style[data-ab-animations]')) {
            const animStyle = document.createElement('style');
            animStyle.setAttribute('data-ab-animations', 'true');
            animStyle.textContent = `
                @keyframes fadeInBody {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                body {
                    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%) !important;
                    color: #ffffff !important;
                }
            `;
            document.head.appendChild(animStyle);
        }
        // Initialize WOW animations if available
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    });
    // Handle the window load event
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
})();