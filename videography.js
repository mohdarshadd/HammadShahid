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

const videoModal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const videoModalClose = document.querySelector('.video-modal-close');
const playButtons = document.querySelectorAll('.play-btn');

function getEmbedUrl(videoType, videoSrc) {
    if (videoType === 'youtube') {
        let videoId = '';
        if (videoSrc.includes('youtube.com/embed/')) {
            return videoSrc + '?autoplay=1&controls=1';
        } else if (videoSrc.includes('youtu.be/')) {
            videoId = videoSrc.split('youtu.be/')[1].split('?')[0];
        } else if (videoSrc.includes('youtube.com/watch?v=')) {
            videoId = videoSrc.split('v=')[1].split('&')[0];
        } else {
            videoId = videoSrc;
        }
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;
    } else if (videoType === 'vimeo') {
        let videoId = '';
        if (videoSrc.includes('vimeo.com/embed/')) {
            return videoSrc;
        } else if (videoSrc.includes('vimeo.com/')) {
            videoId = videoSrc.split('vimeo.com/')[1].split('?')[0];
        } else {
            videoId = videoSrc;
        }
        return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return videoSrc;
}

playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const videoType = btn.getAttribute('data-video-type');
        const videoSrc = btn.getAttribute('data-video-src');
        const embedUrl = getEmbedUrl(videoType, videoSrc);
        modalIframe.src = embedUrl;
        videoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    });
});

videoModalClose.addEventListener('click', () => {
    videoModal.style.display = 'none';
    modalIframe.src = '';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
        modalIframe.src = '';
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.style.display === 'flex') {
        videoModal.style.display = 'none';
        modalIframe.src = '';
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
    }
});

if (videoModal) {
    videoModal.addEventListener('touchmove', (e) => {
        if (e.target === videoModal) {
            e.preventDefault();
        }
    }, false);
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

document.querySelectorAll('.video-gallery-item, .cta-section').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

window.addEventListener('orientationchange', () => {
    if (videoModal.style.display === 'flex') {
        setTimeout(() => {
            videoModal.style.display = 'flex';
        }, 100);
    }
});
