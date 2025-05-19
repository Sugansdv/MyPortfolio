document.addEventListener('DOMContentLoaded', function() {
   const typed = new Typed('.typing', {
        strings: ['Python Full Stack Developer', 'Web Designer', 'JavaScript Coder'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


     // Work filter
     document.querySelectorAll('.work-item').forEach(item => item.classList.add('show'));
    const filterItems = document.querySelectorAll('.filter-item');
    const workItems = document.querySelectorAll('.work-item');
    
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            filterItems.forEach(filter => filter.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            workItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
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
