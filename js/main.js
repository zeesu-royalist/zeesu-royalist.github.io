/**
 * Zeesu Royalist Portfolio Website Core JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgress();
    initTypingEffect();
    initScrollReveal();
    initTiltEffect();
    initBackToTop();
    initForms();
});

/* ================= Navigation Handler ================= */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Sticky Navbar blur on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Toggle
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (burger && burger.classList.contains('active')) {
                burger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Set Active State based on URL path
    const currentPath = window.location.pathname;
    let activeFound = false;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove active class initially
        link.classList.remove('active');

        // Check if current path matches link href (ignoring leading slashes)
        if (href && href !== '#' && (currentPath.includes(href) || (currentPath.endsWith('/') && href === 'index.html'))) {
            link.classList.add('active');
            activeFound = true;
        }
    });

    // Highlight active section on home page scroll (only for anchor links)
    if (!activeFound && (currentPath === '/' || currentPath.includes('index.html') || currentPath === '')) {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let currentSec = '';
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSec = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSec}` || (currentSec === '' && link.getAttribute('href') === 'index.html')) {
                    link.classList.add('active');
                }
            });
        });
    }
}

/* ================= Scroll Progress Bar ================= */
function initScrollProgress() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (windowHeight > 0) {
            const scrollPercent = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }
    });
}

/* ================= Typing Effect ================= */
function initTypingEffect() {
    const target = document.querySelector('.typed-text');
    if (!target) return;

    const words = JSON.parse(target.getAttribute('data-words') || '["Developer", "Designer", "Creator"]');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            target.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            target.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 500);
}

/* ================= Scroll Reveal Animations ================= */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve after showing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(element => {
        observer.observe(element);
    });
}

/* ================= Parallax 3D Tilt Effect ================= */
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.tilt');
    
    // Check if device supports hover/mouse interactions
    if (window.matchMedia("(pointer: coarse)").matches) return;

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x coordinate inside element
            const y = e.clientY - rect.top;  // y coordinate inside element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle (max 10 degrees)
            const rotateY = ((x - centerX) / centerX) * 10;
            const rotateX = -((y - centerY) / centerY) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
        });
    });
}

/* ================= Back To Top Button ================= */
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ================= Form Validations ================= */
function initForms() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        
        // Reset previous errors
        contactForm.querySelectorAll('.form-error').forEach(el => el.remove());
        contactForm.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

        function showError(input, message) {
            input.classList.add('invalid');
            const error = document.createElement('span');
            error.className = 'form-error';
            error.textContent = message;
            input.parentElement.appendChild(error);
            isValid = false;
        }

        // Validate Name
        if (nameInput && nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput) {
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Email is required.');
            } else if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address.');
            }
        }

        // Validate Message
        if (messageInput && messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
        }

        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
                submitBtn.style.backgroundColor = '#10b981'; // green color
                
                // Show success modal or toast
                showSuccessToast('Thank you! Your message has been sent successfully.');
                
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        }
    });
}

function showSuccessToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification success';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('active');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}
