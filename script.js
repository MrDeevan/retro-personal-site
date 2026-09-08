// Retro Personal Site - JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Terminal typing effect
function typeEffect() {
    const typeText = document.querySelector('.type-text');
    const text = typeText.textContent;
    typeText.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typeText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } else {
            setTimeout(() => {
                typeText.textContent = '';
                index = 0;
                setTimeout(type, 500);
            }, 2000);
        }
    }

    type();
}

// Glitch effect on hover
function addGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    
    glitchElement.addEventListener('mouseenter', function() {
        let iterations = 0;
        const interval = setInterval(() => {
            if (iterations < 10) {
                const randomOffset = Math.random() * 10 - 5;
                glitchElement.style.transform = `translate(${randomOffset}px, ${randomOffset}px)`;
                iterations++;
            } else {
                glitchElement.style.transform = 'translate(0, 0)';
                clearInterval(interval);
            }
        }, 30);
    });
}

// Add active state to navbar links based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = '#ff00ff';
                link.style.textShadow = '0 0 10px #ff00ff';
            } else {
                link.style.color = '#00ff88';
                link.style.textShadow = '0 0 10px #00ff88';
            }
        });
    });
}

// Animate elements on scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project-card, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Random scanline glitch effect (occasionally)
function scanlineGlitch() {
    setInterval(() => {
        if (Math.random() > 0.95) {
            const scanlines = document.querySelector('.scanlines');
            scanlines.style.animation = 'none';
            setTimeout(() => {
                scanlines.style.animation = 'flicker 0.15s infinite';
            }, 50);
        }
    }, 2000);
}

// Create floating particles in background
function createParticles() {
    const hero = document.querySelector('.hero');
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 100 + 50 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, 136, 0.05) 0%, transparent 70%)`;
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 - 50 + '%';
        particle.style.left = Math.random() * 100 - 50 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
        hero.appendChild(particle);
    }
}

// Add text shadow glow to headings
function addHeadingGlow() {
    document.querySelectorAll('h2').forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            heading.style.textShadow = `0 0 30px ${heading.style.color || '#00ff88'}, 0 0 60px rgba(0, 255, 136, 0.7)`;
        });
        heading.addEventListener('mouseleave', () => {
            heading.style.textShadow = `0 0 20px ${heading.style.color || '#00ff88'}`;
        });
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    addGlitchEffect();
    updateActiveLink();
    observeElements();
    scanlineGlitch();
    createParticles();
    addHeadingGlow();
    
    // Console message
    console.log('%c=== WELCOME TO THE GRID ===', 'color: #00ff88; font-size: 16px; text-shadow: 0 0 10px #00ff88;');
    console.log('%cRetro Tech Personal Site v1.0', 'color: #ff00ff; font-size: 12px;');
    console.log('%c[ SYSTEM READY ]', 'color: #00ffff; font-size: 11px;');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + H = Home
    if (e.altKey && e.key === 'h') {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    // Alt + A = About
    if (e.altKey && e.key === 'a') {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }
    // Alt + P = Projects
    if (e.altKey && e.key === 'p') {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
    // Alt + C = Contact
    if (e.altKey && e.key === 'c') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
});
