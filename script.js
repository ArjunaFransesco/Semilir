document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    mobileMenuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // WhatsApp Order Function
    window.orderWhatsApp = function (productName) {
        const phoneNumber = "6287753462865";
        const message = `Halo, saya ingin memesan ${productName}. Apakah masih tersedia?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on Scroll
    const animateElements = function () {
        const elements = document.querySelectorAll('.product-card, .info-card, .about-content > div');
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const revealPoint = windowHeight - 100;

            if (elementPosition < revealPoint) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); // Initialize on page load
});

// Product Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Open modal when product image is clicked
    document.querySelectorAll('.product-image-click').forEach(img => {
        img.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when X is clicked
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.product-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('product-modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // WhatsApp order function
    window.orderWhatsApp = function(productName) {
        const phoneNumber = "6287753462865";
        const message = `Halo, saya ingin memesan ${productName}. Apakah masih tersedia?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
});