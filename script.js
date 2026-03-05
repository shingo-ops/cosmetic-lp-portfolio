// ========================================
// Smooth Scroll for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll Animation Observer
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInElements = document.querySelectorAll('.feature-card, .product-card, .review-card, .about-content, .section-header');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// ========================================
// Header Background on Scroll
// ========================================

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop;
});

// ========================================
// CTA Button Click Handlers
// ========================================

const ctaButtons = document.querySelectorAll('.cta-button-header, .cta-button-large');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        // Show alert (in production, this would navigate to a purchase page)
        setTimeout(() => {
            alert('このボタンは架空のプロジェクトです。実際の商品購入はできません。');
        }, 300);
    });
});

// Add ripple animation to styles
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Parallax Effect for Hero Section
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image-placeholder');

    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================================
// Product Card Hover Effect
// ========================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// Feature Card Stagger Animation
// ========================================

const featureCards = document.querySelectorAll('.feature-card');

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);

            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    staggerObserver.observe(card);
});

// ========================================
// Review Cards Fade In
// ========================================

const reviewCards = document.querySelectorAll('.review-card');

const reviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);

            reviewObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

reviewCards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    reviewObserver.observe(card);
});

// ========================================
// Number Counter Animation
// ========================================

function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString().padStart(2, '0');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toString().padStart(2, '0');
        }
    }, 16);
}

const featureNumbers = document.querySelectorAll('.feature-number');

const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = parseInt(entry.target.textContent);
            animateNumber(entry.target, number, 1000);
            numberObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

featureNumbers.forEach(number => {
    numberObserver.observe(number);
});

// ========================================
// Loading Animation
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Message
// ========================================

console.log('%cLUMIÈRE', 'font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #D4AF37 0%, #FFE4E9 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cCosmetic Brand Landing Page', 'font-size: 14px; color: #666;');
