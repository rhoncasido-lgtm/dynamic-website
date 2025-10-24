// Header interactions
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const sections = Array.from(navLinks)
        .map(l => {
            try {
                return document.querySelector(l.getAttribute('href'));
            } catch (e) {
                return null;
            }
        })
        .filter(Boolean);

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Let smooth scroll handle navigation if present; still mark active
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');

            // Set clicked link as active immediately
            setActiveLink(link);
        });
    });

    // Scrollspy: highlight nav link based on scroll position
    function onScrollSpy() {
        const scrollPos = window.scrollY + (window.innerHeight * 0.18);
        let current = null;

        for (let i = 0; i < sections.length; i++) {
            const sec = sections[i];
            if (!sec) continue;
            const top = sec.getBoundingClientRect().top + window.scrollY;
            const bottom = top + sec.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                current = sec;
                break;
            }
        }

        if (current) {
            const id = '#' + current.id;
            const link = document.querySelector('nav a[href="' + id + '"]');
            if (link) setActiveLink(link);
        }
    }

    let spyTimeout = null;
    window.addEventListener('scroll', function() {
        if (spyTimeout) clearTimeout(spyTimeout);
        spyTimeout = setTimeout(onScrollSpy, 60);
    }, { passive: true });

    // Helper to set active class
    function setActiveLink(link) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    // Initialize active link on load
    onScrollSpy();
});