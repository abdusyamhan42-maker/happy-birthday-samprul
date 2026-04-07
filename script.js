// Auto play birthday song
window.addEventListener('load', () => {
    const audio = document.getElementById('birthdaySong');
    
    // Mute first to avoid autoplay policy issues
    audio.muted = true;
    audio.play().then(() => {
        setTimeout(() => {
            audio.muted = false;
        }, 1000);
    }).catch(() => {
        console.log('Audio autoplay blocked');
    });

    // Create balloons
    createBalloons();
    
    // Random fireworks
    setInterval(createFirework, 3000);
});

// Blow candles function
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const button = document.querySelector('.blow-candle');
    
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.animation = 'none';
            flame.style.opacity = '0';
            createFirework();
        }, index * 200);
    });
    
    button.innerHTML = '🎉 Lilin Mati! Selamat! 🎉';
    button.style.background = 'linear-gradient(45deg, #00b894, #00cec9)';
    
    setTimeout(() => {
        showConfetti();
    }, 1000);
}

function createBalloons() {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.animationDelay = Math.random() * 3 + 's';
            balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';
            balloon.style.background = `radial-gradient(circle at 30% 30%, hsl(${Math.random()*360}, 70%, 60%), hsl(${Math.random()*360}, 70%, 50%))`;
            document.body.appendChild(balloon);
            
            setTimeout(() => {
                balloon.remove();
            }, 8000);
        }, i * 300);
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 30}vh;
        width: 6px;
        height: 6px;
        background: hsl(${Math.random()*360}, 70%, 60%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: fireworkExplosion 1.5s ease-out forwards;
    `;
    document.body.appendChild(firework);
    
    setTimeout(() => firework.remove(), 1500);
}

function showConfetti() {
    for(let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: hsl(${Math.random()*360}, 70%, 60%);
            left: ${Math.random() * 100}vw;
            top: -10px;
            pointer-events: none;
            z-index: 1000;
            animation: confettiFall 3s linear forwards;
            transform: rotate(${Math.random()*360}deg);
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fireworkExplosion {
        0% { transform: scale(0) translateY(0); opacity: 1; }
        50% { transform: scale(1) translateY(-50px); opacity: 1; }
        100% { transform: scale(0) translateY(-100px); opacity: 0; }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mouse trail effect
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #ffd700;
        border-radius: 50%;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleFade 0.5s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 500);
});

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0) translateY(-20px); }
    }
`;
document.head.appendChild(sparkleStyle);
