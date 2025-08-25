// script.js for TechSpark Blog

document.addEventListener('DOMContentLoaded', function () {
    // Highlight active nav link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // Hamburger menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('open');
            menuBtn.classList.toggle('open');
        });
    }

    // Shrink header on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
        }
    });
});

// Ripple effect for buttons
// This is outside DOMContentLoaded so it works for dynamically added buttons too

document.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const btn = e.target;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
});
