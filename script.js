const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const serviceSelect = document.getElementById('service');
const formMessage = document.getElementById('formMessage');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameInput.style.borderColor = '#f87171';
        return false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters';
        nameInput.style.borderColor = '#f87171';
        return false;
    } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '';
        return true;
    }
}

function validateEmail() {
    const emailError = document.getElementById('emailError');
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailInput.style.borderColor = '#f87171';
        return false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        emailInput.style.borderColor = '#f87171';
        return false;
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '';
        return true;
    }
}

function validateMessage() {
    const messageError = document.getElementById('messageError');
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        messageInput.style.borderColor = '#f87171';
        return false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        messageInput.style.borderColor = '#f87171';
        return false;
    } else {
        messageError.textContent = '';
        messageInput.style.borderColor = '';
        return true;
    }
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        validateName();
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        validateEmail();
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        validateMessage();
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
        showFormMessage('Please fix the errors above', 'error');
        return;
    }

    const formData = new FormData(contactForm);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            showFormMessage(
                'Thank you! Your message has been sent successfully. Hammad will get back to you soon.',
                'success'
            );
            contactForm.reset();
        } else {
            showFormMessage('Something went wrong. Please try again.', 'error');
        }
    } catch (error) {
        showFormMessage('Error sending message.', 'error');
    }

    setTimeout(() => {
        formMessage.classList.remove('success', 'error');
        formMessage.textContent = '';
    }, 5000);
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.remove('success', 'error');
    formMessage.classList.add(type);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 72;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

const videos = document.querySelectorAll('video');
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

videos.forEach(video => {
    videoObserver.observe(video);
});
