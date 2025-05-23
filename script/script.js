document.addEventListener('DOMContentLoaded', function() {
   const typed = new Typed('.typing', {
        strings: ['Python Full Stack Developer', 'Web Designer', 'JavaScript Coder'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


     

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
