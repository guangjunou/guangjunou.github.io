const introHeight = document.querySelector('.intro').offsetHeight;

document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.getElementById('top-button');

    window.addEventListener('scroll', function() {
        if (window.scrollY > introHeight) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    topButton.addEventListener('click', function() {
        document.documentElement.scrollTop = 0; 
    });
});




