// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial call to check elements in view on page load
    animateOnScroll();

    // Smooth scrolling for navigation links with header offset
    function scrollToWithOffset(targetElement) {
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const extraOffset = 12; // small gap so section title isn't flush to header
        const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
        const scrollTo = Math.max(0, Math.floor(elementTop - headerHeight - extraOffset));

        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }

    document.querySelectorAll('nav a, .btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return; // allow normal links
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // close any mobile nav if present (header.js handles active class separately)
                scrollToWithOffset(targetElement);

                // Update the URL hash without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                } else {
                    location.hash = href;
                }
            }
        });
    });

    // If page loads with a hash, scroll to it with offset
    if (window.location.hash) {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            // wait until layout stabilizes
            setTimeout(() => scrollToWithOffset(initialTarget), 50);
        }
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});