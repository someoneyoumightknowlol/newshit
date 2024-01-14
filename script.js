document.getElementById('instagram-button').addEventListener('mouseenter', playHoverSound);
document.getElementById('discord-button').addEventListener('mouseenter', playHoverSound);

function playHoverSound() {
    var audio = document.getElementById('hoverSound');
    audio.currentTime = 0; // Rewind to the beginning (in case the sound is still playing)
    audio.play().catch(function(error) {
        console.error('Error playing sound:', error);
    });
}
