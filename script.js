window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundImage = document.querySelector('.background-image');
    backgroundImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Hız ayarı
});