document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('openBtn');
    const bgMusic = document.getElementById('bg-music');

    // Click to Open Envelope & Play Music
    openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        envelope.classList.add('open');

        // Play romantic background music
        if (bgMusic) {
            bgMusic.volume = 0.5; // Set smooth volume (50%)
            bgMusic.play().catch(error => {
                console.log("Autoplay blocked by browser:", error);
            });
        }
    });

    // Create Romantic Floating Hearts Animation in Background
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 400);
});
