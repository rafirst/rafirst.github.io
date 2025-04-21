const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.project-card, .timeline-item');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.classList.add('opacity-100');
            element.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}

// Initialize elements
revealElements.forEach(element => {
    element.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
});

// Check on load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);