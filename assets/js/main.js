// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 1500);

    // Countdown Timer
    function updateCountdown() {
        const weddingDate = new Date('June 15, 2024 10:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        document.getElementById('days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById('hours').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById('minutes').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById('seconds').textContent = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);

    // Music Player
    const musicToggle = document.getElementById('music-toggle');
    const weddingMusic = document.getElementById('wedding-music');
    let isMusicPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            weddingMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute text-xl"></i>';
        } else {
            weddingMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-up text-xl"></i>';
        }
        isMusicPlaying = !isMusicPlaying;
    });
});
