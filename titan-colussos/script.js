// JavaScript for animations and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        const scrollToTop = document.querySelector('.scroll-to-top');
        if (window.scrollY > 300) {
            scrollToTop.classList.add('active');
        } else {
            scrollToTop.classList.remove('active');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.value-card, .service-card, .client-logo, .team-member, .branch-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial call to check elements in view on page load
    animateOnScroll();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll to top functionality
    document.querySelector('.scroll-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form validation enhancement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Reset previous error styles
            [name, email, subject, message].forEach(field => {
                if (field) {
                    field.style.boxShadow = 'none';
                }
            });
            
            // Validate fields
            if (name && name.value.trim() === '') {
                name.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.5)';
                isValid = false;
            }
            
            if (email && (email.value.trim() === '' || !isValidEmail(email.value))) {
                email.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.5)';
                isValid = false;
            }
            
            if (subject && subject.value === '') {
                subject.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.5)';
                isValid = false;
            }
            
            if (message && message.value.trim() === '') {
                message.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.5)';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Add floating animation to some elements
    const floatElements = document.querySelectorAll('.value-card, .service-card');
    floatElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Team member data
    const teamData = {
        ceo: {
            name: "John Smith",
            position: "Chief Executive Officer",
            description: "John brings over 15 years of executive leadership experience in the tech industry. Under his guidance, our company has grown from a startup to a market leader with over 200 employees. He holds an MBA from Harvard Business School and is passionate about fostering innovation and company culture.",
            company: "Dynamic PHP Website - Headquarters",
            social: [
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/johnsmith" },
                { icon: "fab fa-twitter", url: "https://twitter.com/johnsmith" },
                { icon: "fab fa-instagram", url: "https://instagram.com/johnsmith" },
                { icon: "fab fa-facebook-f", url: "https://facebook.com/johnsmith" }
            ],
            gradient: "linear-gradient(45deg, #6a11cb, #2575fc)"
        },
        cto: {
            name: "Sarah Johnson",
            position: "Chief Technology Officer",
            description: "Sarah is a visionary technology leader with expertise in software architecture and cloud computing. She previously led engineering teams at Google and Microsoft, and holds a PhD in Computer Science from Stanford. Sarah is responsible for our technology roadmap and innovation strategy.",
            company: "Dynamic PHP Website - Tech Division",
            social: [
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/sarahjohnson" },
                { icon: "fab fa-twitter", url: "https://twitter.com/sarahjohnson" },
                { icon: "fab fa-github", url: "https://github.com/sarahjohnson" },
                { icon: "fab fa-medium", url: "https://medium.com/@sarahjohnson" }
            ],
            gradient: "linear-gradient(45deg, #ff6b6b, #ffa726)"
        },
        cmo: {
            name: "Michael Brown",
            position: "Chief Marketing Officer",
            description: "Michael is a results-driven marketing expert with a proven track record in brand development and digital marketing strategy. He has successfully launched over 50 products in competitive markets and specializes in data-driven marketing approaches that deliver measurable ROI.",
            company: "Dynamic PHP Website - Marketing Department",
            social: [
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/michaelbrown" },
                { icon: "fab fa-twitter", url: "https://twitter.com/michaelbrown" },
                { icon: "fab fa-instagram", url: "https://instagram.com/michaelbrown" },
                { icon: "fab fa-youtube", url: "https://youtube.com/michaelbrown" }
            ],
            gradient: "linear-gradient(45deg, #4ecdc4, #44a08d)"
        },
        cfo: {
            name: "Emily Davis",
            position: "Chief Financial Officer",
            description: "Emily is a certified public accountant with extensive experience in financial management and strategic planning. She has successfully managed IPOs and mergers for multiple tech companies. Emily's financial acumen has been instrumental in our company's sustainable growth and profitability.",
            company: "Dynamic PHP Website - Finance Division",
            social: [
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/emilydavis" },
                { icon: "fab fa-twitter", url: "https://twitter.com/emilydavis" },
                { icon: "fab fa-instagram", url: "https://instagram.com/emilydavis" }
            ],
            gradient: "linear-gradient(45deg, #ff9a9e, #fad0c4)"
        }
    };

    // Team Modal Functions
    window.openModal = function(memberId) {
        const member = teamData[memberId];
        const modal = document.getElementById('teamModal');
        
        // Update modal content
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalPosition').textContent = member.position;
        document.getElementById('modalDescription').textContent = member.description;
        document.getElementById('modalCompany').textContent = member.company;
        
        // Update image with gradient
        document.getElementById('modalImage').innerHTML = `
            <div style="width:100%; height:100%; background:${member.gradient}; display:flex; align-items:center; justify-content:center; color:white; font-size: 1.5rem;">
                ${member.position} Photo
            </div>
        `;
        
        // Update social links
        const socialContainer = document.getElementById('modalSocial');
        socialContainer.innerHTML = member.social.map(social => `
            <a href="${social.url}" target="_blank" rel="noopener">
                <i class="${social.icon}"></i>
            </a>
        `).join('');
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function() {
        const modal = document.getElementById('teamModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside content
    const teamModal = document.getElementById('teamModal');
    if (teamModal) {
        teamModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Updated JavaScript for light theme effects
document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements for light theme
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';
    document.body.appendChild(floatingContainer);
    
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        floatingContainer.appendChild(element);
    }
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before, .about::before');
        
        parallaxElements.forEach(element => {
            if (element.style) {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
    
    // Add interactive cursor effect (light theme version)
    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.background = 'radial-gradient(circle, var(--primary-color), transparent)';
    cursor.style.opacity = '0.3';
    cursor.style.transition = 'transform 0.1s';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
    
    // Add hover effects to cards with tilt
    const cards = document.querySelectorAll('.value-card, .service-card, .team-member, .branch-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const angleY = (x - centerX) / 10;
            const angleX = (centerY - y) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Add geometric pattern animation to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '0';
        canvas.style.opacity = '0.3';
        heroSection.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
        
        const shapes = [];
        const shapeCount = 20;
        
        for (let i = 0; i < shapeCount; i++) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 20 + 10,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 2 - 1,
                type: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
                color: `rgba(${37 + Math.random() * 50}, ${99 + Math.random() * 50}, ${235}, ${Math.random() * 0.1 + 0.05})`
            });
        }
        
        function animateShapes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            shapes.forEach(shape => {
                shape.x += shape.speedX;
                shape.y += shape.speedY;
                shape.rotation += shape.rotationSpeed;
                
                if (shape.x < -shape.size || shape.x > canvas.width + shape.size) shape.speedX *= -1;
                if (shape.y < -shape.size || shape.y > canvas.height + shape.size) shape.speedY *= -1;
                
                ctx.save();
                ctx.translate(shape.x, shape.y);
                ctx.rotate(shape.rotation * Math.PI / 180);
                ctx.fillStyle = shape.color;
                
                if (shape.type === 0) {
                    // Circle
                    ctx.beginPath();
                    ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
                    ctx.fill();
                } else if (shape.type === 1) {
                    // Square
                    ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
                } else {
                    // Triangle
                    ctx.beginPath();
                    ctx.moveTo(0, -shape.size/2);
                    ctx.lineTo(shape.size/2, shape.size/2);
                    ctx.lineTo(-shape.size/2, shape.size/2);
                    ctx.closePath();
                    ctx.fill();
                }
                
                ctx.restore();
            });
            
            requestAnimationFrame(animateShapes);
        }
        
        animateShapes();
        
        window.addEventListener('resize', () => {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        });
    }
});

// Enhanced navigation functionality with active state
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });
    
    // Set active state on navigation click
    function setActiveNavItem(clickedItem) {
        // Remove active class from all nav items
        document.querySelectorAll('nav a').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        clickedItem.classList.add('active');
        
        // Close mobile menu if open
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    // Close mobile menu and set active state when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Set this nav item as active
            setActiveNavItem(this);
            
            // If it's a section link, scroll to it
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;
        let currentActive = '';
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentActive = sectionId;
            }
        });
        
        // Update nav items based on current section
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentActive}`) {
                link.classList.add('active');
            }
        });
        
        // If no section is active, set home as active
        if (!currentActive && scrollY < 100) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            const homeLink = document.querySelector('nav a[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Set home as active by default
    if (window.location.hash) {
        const activeLink = document.querySelector(`nav a[href="${window.location.hash}"]`);
        if (activeLink) {
            setActiveNavItem(activeLink);
        }
    } else {
        const homeLink = document.querySelector('nav a[href="#home"]');
        if (homeLink) {
            setActiveNavItem(homeLink);
        }
    }
    
    // Add click event to logo to set home as active
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            const homeLink = document.querySelector('nav a[href="#home"]');
            if (homeLink) {
                setActiveNavItem(homeLink);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
});