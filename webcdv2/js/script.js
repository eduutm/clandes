document.addEventListener('DOMContentLoaded', () => {
    
    const introScreen = document.getElementById('introScreen');
    const enterButton = document.getElementById('enterButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let musicPlayed = false;

    enterButton.addEventListener('click', () => {
        introScreen.classList.add('hidden'); 
        
        introScreen.addEventListener('transitionend', () => {
            introScreen.style.display = 'none';
        }, { once: true });

        if (!musicPlayed) {
            backgroundMusic.volume = 0.025; 
            backgroundMusic.play().catch(error => {
                console.error("Error al intentar reproducir la música:", error);
            });
            musicPlayed = true;
        }
    });

    const typewriterTextElement = document.getElementById('typewriter-text');
    const textToType = `Bienvenidos a Clandestino V2, un lugar donde las puertas del roleo están abiertas de par en par para todos. Aquí no creemos en barreras ni en peajes: simplemente entra, juega y disfruta sin tener que pagar por vivir la experiencia. Nos enorgullece decir que somos de los que apuestan por un rol libre y accesible, para que cada minuto que te queda en FiveM sea una buena historia que contar.

En resumen, en Clandestino V2 no pagas por jugar: pagas con tu creatividad, tu tiempo y tus ganas de sumarte a una comunidad que valora el buen rol por encima de todo. ¡Esperamos que disfrutes cada momento que compartas con nosotros!`;
    let i = 0;
    const speed = 25;

    function typeWriter() {
        if (typewriterTextElement && i < textToType.length) {
            typewriterTextElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (typewriterTextElement) {
            typewriterTextElement.style.borderRightColor = 'transparent';
        }
    }

    const aboutSection = document.getElementById('sobre-nosotros');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && i === 0) {
            typeWriter();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    if (aboutSection) {
        observer.observe(aboutSection);
    }

});