


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.js-wave');
    logo.addEventListener('mouseover', function() {
        logo.classList.add('wave');
        setTimeout( () => {
            logo.classList.remove('wave');
          }, 1000);
    });

    setTimeout(function() {
        waveOnLoad();
      }, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.js-wave1');
    logo.addEventListener('mouseover', function() {
        logo.classList.add('wave1');
        setTimeout( () => {
            logo.classList.remove('wave1');
          }, 1000);
    });
    setTimeout(function() {
        waveOnLoad();
      }, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.js-wave2');
    logo.addEventListener('mouseover', function() {
        logo.classList.add('wave2');
        setTimeout( () => {
            logo.classList.remove('wave2');
          }, 1000);
    });

    setTimeout(function() {
        waveOnLoad();
      }, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.js-wave3');
    logo.addEventListener('mouseover', function() {
        logo.classList.add('wave3');
        setTimeout( () => {
            logo.classList.remove('wave3');
          }, 1000);
    });

    setTimeout(function() {
        waveOnLoad();
      }, 1000);
});