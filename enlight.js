// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scroll for navigation links
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

// GSAP Scroll-Up Animations
// Hero section animation
gsap.from('.hero-content', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
        end: 'top center',
        toggleActions: 'play none none reverse'
    }
});

// Scroll indicator animation
gsap.from('.scroll-indicator', {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
        end: 'top center',
        toggleActions: 'play none none reverse'
    }
});

// About section animation
gsap.from('.about-content', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'top center',
        toggleActions: 'play none none reverse'
    }
});

// Features animation
gsap.utils.toArray('.feature-item').forEach((feature, index) => {
    gsap.from(feature, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.features',
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
});

// Section headers animation
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: header,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
});

// Services cards animation
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
});

// Course cards animation
gsap.utils.toArray('.course-card').forEach((card, index) => {
    gsap.from(card, {
        scale: 0.9,
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
});

// Testimonials animation
gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
    gsap.from(card, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse'
        }
    });
});

// Contact section animation
gsap.from('.contact-content', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'top center',
        toggleActions: 'play none none reverse'
    }
});

// Footer animation
gsap.from('.footer-content', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'top center',
        toggleActions: 'play none none reverse'
    }
});

// Form submission handlers
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// CTA button handlers
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('primary')) {
            const contactSection = document.querySelector('#contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else if (button.classList.contains('secondary')) {
            const aboutSection = document.querySelector('#about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Enroll button handlers
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Parallax effect for hero section
gsap.to('.hero-image', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});