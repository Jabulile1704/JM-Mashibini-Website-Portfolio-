// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 10;
    const endY = -10;
    const duration = 3000 + Math.random() * 2000;
    const size = 1 + Math.random() * 3;

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    document.body.appendChild(particle);

    const animation = particle.animate([
        {
            transform: `translateY(0px) translateX(${Math.random() * 100 - 50}px)`,
            opacity: 0
        },
        {
            transform: `translateY(${endY - startY}px) translateX(${Math.random() * 100 - 50}px)`,
            opacity: 0.8,
            offset: 0.1
        },
        {
            transform: `translateY(${endY - startY}px) translateX(${Math.random() * 100 - 50}px)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'linear'
    });

    animation.onfinish = () => {
        particle.remove();
    };
}

// Generate particles periodically
setInterval(createParticle, 300);

// Skill items animation on hover
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.animationPlayState = 'running';
    });
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero h1');
const titleText = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
setTimeout(typeWriter, 1000);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Add glow effect on project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Cursor trail effect
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    if (!isMoving) {
        isMoving = true;
        setTimeout(() => {
            isMoving = false;
        }, 50);

        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: var(--primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            opacity: 0.6;
            transition: all 0.3s ease-out;
        `;

        document.body.appendChild(trail);

        setTimeout(() => {
            trail.style.transform = 'scale(0)';
            trail.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            trail.remove();
        }, 400);
    }
});

// Console easter egg
console.log('%c👋 Hello Developer!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cLooking at the code? I like your style! 🚀', 'color: #7c3aed; font-size: 14px;');
console.log('%cFeel free to reach out if you want to collaborate!', 'color: #ec4899; font-size: 12px;');
