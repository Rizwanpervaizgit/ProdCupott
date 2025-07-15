document.addEventListener('DOMContentLoaded', () => {
    function loadImagesIntoGrid(gridId, numberOfImages, startIndex = 1) {
        const gridElement = document.getElementById(gridId);
        if (!gridElement) return;
        gridElement.innerHTML = '';
        for (let i = startIndex; i < startIndex + numberOfImages; i++) {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            const img = document.createElement('img');
            img.src = `images/img${i}.jpg`;
            img.alt = `Movie Poster ${i}`;
            img.onerror = function() {
                this.onerror = null;
                this.src = `https://placehold.co/300x300/333333/FFFFFF?text=No+Image`;
            };
            if (gridId === 'live-tv-grid') {
                movieItem.classList.add('square-container');
            }
            movieItem.appendChild(img);
            gridElement.appendChild(movieItem);
        }
    }

    loadImagesIntoGrid('trending-now-grid', 12, 1);
    loadImagesIntoGrid('new-releases-grid', 10, 13);
    loadImagesIntoGrid('live-tv-grid', 6, 25);

    const carouselBanner = document.getElementById('carousel-banner');
    const carouselContainer = document.getElementById('carousel-container');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    const closeCarouselBtn = document.getElementById('close-carousel-btn');
    const slides = document.querySelectorAll('.carousel-slide');
    const startWatchingNowBtn = document.getElementById('start-watching-now-btn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

    if (closeCarouselBtn && carouselBanner) {
        closeCarouselBtn.addEventListener('click', () => {
            carouselBanner.style.height = '0';
            carouselBanner.style.opacity = '0';
            carouselBanner.style.transition = 'height 0.5s ease-out, opacity 0.5s ease-out';
            carouselBanner.addEventListener('transitionend', function handler() {
                carouselBanner.style.display = 'none';
                carouselBanner.removeEventListener('transitionend', handler);
                // Modified: Scroll to the "Start Free Trial" section after closing carousel
                document.getElementById('start-free-trial-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    if (startWatchingNowBtn) {
        // Modified: start-watching-now-btn now scrolls to the "Start Free Trial" section
        startWatchingNowBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior if it's a link
            document.getElementById('start-free-trial-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('bg-[#1F242D]', 'shadow-xl');
            header.classList.remove('bg-opacity-90');
        } else {
            header.classList.remove('bg-[#1F242D]', 'shadow-xl');
            header.classList.add('bg-opacity-90');
        }
    });

    const openFormBtn = document.getElementById('open-form-btn'); // This is the "Start Free Trial" button
    const registrationModalOverlay = document.getElementById('registration-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const registrationForm = document.getElementById('registration-form');
    const registrationFormContainer = document.getElementById('registration-form-container');
    const thankYouMessage = document.getElementById('thank-you-message');

    // Mobile menu elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    function openRegistrationModal() {
        if (registrationModalOverlay) {
            registrationModalOverlay.classList.remove('hidden');
            registrationFormContainer.classList.remove('hidden');
            thankYouMessage.classList.add('hidden');
        }
    }

    // Only the 'open-form-btn' should open the modal
    if (openFormBtn) {
        openFormBtn.addEventListener('click', openRegistrationModal);
    }

    // Modified: Select all links that should scroll to the "Start Free Trial" section
    // This includes navigation links and footer links that previously opened the modal.
    const scrollTriggers = document.querySelectorAll('a[href="#start-free-trial-section"]');
    scrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor link behavior
            const targetId = trigger.getAttribute('href').substring(1); // Get the ID without the '#'
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    if (closeModalBtn && registrationModalOverlay) {
        closeModalBtn.addEventListener('click', () => {
            registrationModalOverlay.classList.add('hidden');
        });
        registrationModalOverlay.addEventListener('click', (event) => {
            if (event.target === registrationModalOverlay) {
                registrationModalOverlay.classList.add('hidden');
            }
        });
    }

    if (registrationForm && registrationFormContainer && thankYouMessage) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const emailAddress = document.getElementById('emailAddress').value;
            const preferredDevice = document.getElementById('preferredDevice').value;
            if (!fullName || !emailAddress || !preferredDevice) {
                console.error('Validation failed.');
                return;
            }
            console.log('Form Data Submitted:');
            console.log('Full Name:', fullName);
            console.log('Email Address:', emailAddress);
            console.log('Mobile Number:', document.getElementById('mobileNumber').value);
            console.log('Preferred Device:', preferredDevice);
            const genres = Array.from(document.querySelectorAll('input[name="genres"]:checked')).map(cb => cb.value);
            console.log('Genres:', genres);
            console.log('Keep me in loop:', document.getElementById('keepMeInLoop').checked);
            registrationFormContainer.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
            // No need to scroll here as the modal is still open
            // thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Mobile menu toggle logic
    if (mobileMenuButton && mobileMenu && mobileMenuOverlay) {
        mobileMenuButton.addEventListener('click', () => {
            // Ensure the menu is visible before transitioning
            mobileMenu.classList.remove('hidden');
            // Use requestAnimationFrame to ensure the browser registers the 'display' change
            // before the 'transform' change, allowing the transition to occur.
            requestAnimationFrame(() => {
                mobileMenu.classList.remove('-translate-x-full');
                mobileMenuOverlay.classList.remove('hidden');
            });
        });
    }

    function closeMobileMenu() {
        if (mobileMenu && mobileMenuOverlay) {
            mobileMenu.classList.add('-translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            // Add 'hidden' class only after the transition completes
            mobileMenu.addEventListener('transitionend', function handler() {
                mobileMenu.classList.add('hidden');
                mobileMenu.removeEventListener('transitionend', handler);
            }, { once: true }); // Use { once: true } to ensure the event listener is removed after it fires once
        }
    }

    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when a link inside it is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
