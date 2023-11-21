function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.navbar-right a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToTop();
})

var links = document.querySelectorAll('.navbar a');
var navbar = document.querySelector('.navbar');
var main = document.querySelector('.main');
var logoText = document.querySelector('.navbar-left h1');


var scr_height = 100;
function updateColors(scrolled) {
    if (scrolled > scr_height) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.color = '#333';
        main.style.padding = '16px';

        links.forEach(link => {
            link.style.color = '#333';
        });

        logoText.style.color = '#333';
    } else {
        navbar.style.backgroundColor = '#333';
        navbar.style.color = '#f2f2f2';
        main.style.padding = '80px 16px';

        links.forEach(link => {
            link.style.color = '#f2f2f2';
        });

        links.forEach(function (link) {
            link.addEventListener('mouseover', function () {
                if (scrolled < scr_height) {
                    link.style.color = '#333';
                }
            });
            link.addEventListener('mouseout', function () {
                if (scrolled < scr_height) {
                    link.style.color = '#f2f2f2';
                }
            });
        })

        logoText.style.color = '#f2f2f2';
    }
}

window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    updateColors(scrolled);
});