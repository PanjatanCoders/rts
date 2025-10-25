// ================================
// NAVIGATION FUNCTIONALITY
// ================================

// Get navigation elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ================================
// SMOOTH SCROLL & ACTIVE LINK
// ================================

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// FORM HANDLING
// ================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        showAlert('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showAlert('Message sent successfully! We will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alert notification function
function showAlert(message, type) {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Style the alert
    alert.style.position = 'fixed';
    alert.style.top = '90px';
    alert.style.right = '20px';
    alert.style.padding = '1rem 1.5rem';
    alert.style.borderRadius = '8px';
    alert.style.backgroundColor = type === 'success' ? '#10B981' : '#EF4444';
    alert.style.color = 'white';
    alert.style.fontWeight = '600';
    alert.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    alert.style.zIndex = '9999';
    alert.style.animation = 'slideIn 0.3s ease-out';
    
    // Add to document
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}

// Add animation styles for alert
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ================================
// INTERSECTION OBSERVER (Fade In)
// ================================

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll(
    '.service-card, .feature-card, .testimonial-card, .product-card'
);

animatedElements.forEach(el => observer.observe(el));

// ================================
// BUTTON CLICK HANDLERS
// ================================

// WhatsApp button (replace with actual number)
const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '917030400093'; // Replace with actual number
        const message = encodeURIComponent('Hi! I am interested in your services.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
});

// Claim Free Access button
const claimButtons = document.querySelectorAll('a[href="#contact"]');
claimButtons.forEach(button => {
    if (button.textContent.includes('Claim Free Access')) {
        button.addEventListener('click', (e) => {
            // Could open a modal or redirect to WhatsApp
            console.log('Claim Free Access clicked');
        });
    }
});

// ================================
// PAGE LOAD ANIMATION
// ================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ================================
// UTILITY FUNCTIONS
// ================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    updateActiveLink();
}, 100);

window.addEventListener('scroll', optimizedScroll);

// ================================
// CONSOLE WELCOME MESSAGE
// ================================

console.log('%c Welcome to Raza Technology Services! ', 'background: #FF6B00; color: white; font-size: 20px; padding: 10px;');
console.log('%c Built with ❤️ in Pune ', 'color: #FF6B00; font-size: 14px;');

// ================================
// YEAR UPDATE (Footer)
// ================================

// Auto-update copyright year
const updateYear = () => {
    const yearElements = document.querySelectorAll('.footer-info p');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el.textContent.includes('©')) {
            el.textContent = `© ${currentYear} Raza Technology Services. All rights reserved.`;
        }
    });
};

updateYear();

// ================================
// CALLBACK REQUEST MODAL
// ================================

const callbackModal = document.getElementById('callbackModal');
const callbackButtons = document.querySelectorAll('a[href="#contact"].btn-primary');
const closeModalButton = document.getElementById('closeModal');
const callbackForm = document.getElementById('callbackForm');

// Open callback modal when "Request Callback" button is clicked
callbackButtons.forEach(button => {
    if (button.textContent.includes('Request Callback')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openCallbackModal();
        });
    }
});

// Open modal function
function openCallbackModal() {
    callbackModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Re-initialize Lucide icons for the modal
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

// Close modal function
function closeCallbackModal() {
    callbackModal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
    callbackForm.reset();
}

// Close modal when close button is clicked
closeModalButton.addEventListener('click', closeCallbackModal);

// Close modal when clicking outside the modal content
callbackModal.addEventListener('click', (e) => {
    if (e.target === callbackModal) {
        closeCallbackModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && callbackModal.style.display === 'flex') {
        closeCallbackModal();
    }
});

// Handle callback form submission
callbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('callbackName').value.trim(),
        phone: document.getElementById('callbackPhone').value.trim(),
        email: document.getElementById('callbackEmail').value.trim(),
        service: document.getElementById('callbackService').value,
        time: document.getElementById('callbackTime').value,
        message: document.getElementById('callbackMessage').value.trim()
    };

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.service || !formData.time) {
        showAlert('Please fill in all required fields', 'error');
        return;
    }

    // Validate phone number (basic validation for Indian numbers)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,5}[)]?[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
        showAlert('Please enter a valid phone number', 'error');
        return;
    }

    // Validate email if provided
    if (formData.email && !isValidEmail(formData.email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }

    // Disable submit button to prevent multiple submissions
    const submitButton = callbackForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
        // Submit the callback request
        await submitCallbackRequest(formData);

        // Show success message
        showAlert('Callback request submitted successfully! We will contact you soon.', 'success');

        // Close modal and reset form
        closeCallbackModal();

    } catch (error) {
        console.error('Error submitting callback request:', error);
        showAlert('Failed to submit request. Please try again or contact us directly.', 'error');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// ================================
// BACKEND CONFIGURATION
// ================================

// Load configuration from config.js (not committed to GitHub)
// If config.js doesn't exist, use fallback values
const WEB3FORMS_ACCESS_KEY = typeof CONFIG !== 'undefined' ? CONFIG.WEB3FORMS_ACCESS_KEY : 'YOUR_WEB3FORMS_ACCESS_KEY';
const YOUR_EMAIL = typeof CONFIG !== 'undefined' ? CONFIG.YOUR_EMAIL : 'razatechnologyservices@gmail.com';
const WHATSAPP_NUMBER = typeof CONFIG !== 'undefined' ? CONFIG.WHATSAPP_NUMBER : '917030400093';
const USE_WHATSAPP_FOR_TESTING = typeof CONFIG !== 'undefined' ? CONFIG.USE_WHATSAPP_FOR_TESTING : true;

// Submit callback request
async function submitCallbackRequest(data) {
    // Use WhatsApp during testing phase
    if (USE_WHATSAPP_FOR_TESTING) {
        console.log('📱 Testing mode: Using WhatsApp');
        return submitViaWhatsApp(data);
    }

    // Check if Web3Forms is configured
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        console.warn('⚠️ Web3Forms not configured. Using WhatsApp fallback.');
        return submitViaWhatsApp(data);
    }

    // Try Web3Forms first
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `New Callback Request from ${data.name}`,
                from_name: 'RTS Website - Callback Form',
                to: YOUR_EMAIL,
                name: data.name,
                phone: data.phone,
                email: data.email || 'Not provided',
                service: data.service,
                preferred_time: data.time,
                message: data.message || 'No additional message',
                // Custom formatting for better email
                replyto: data.email || YOUR_EMAIL,
                // Add custom HTML template
                template: 'callback_request'
            })
        });

        const result = await response.json();

        if (result.success) {
            console.log('✅ Callback request sent successfully via Web3Forms');
            return {
                status: 'success',
                message: 'Request submitted successfully! We will contact you soon.'
            };
        } else {
            throw new Error(result.message || 'Submission failed');
        }

    } catch (error) {
        console.error('Web3Forms error:', error);
        console.log('Falling back to WhatsApp...');
        return submitViaWhatsApp(data);
    }
}

// WhatsApp fallback method
function submitViaWhatsApp(data) {
    const message = `🔔 New Callback Request

📝 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email || 'Not provided'}
🛠️ Service: ${data.service}
⏰ Preferred Time: ${data.time}
💬 Message: ${data.message || 'None'}

Please call back at your earliest convenience!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');

    return {
        status: 'success',
        message: 'Request will be sent via WhatsApp'
    };
}