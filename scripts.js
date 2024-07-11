function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄️';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's'; // Entre 7 y 10 segundos
    document.querySelector('.snowflakes').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

setInterval(createSnowflakes, 300);

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's'; // Entre 1 y 3 segundos
    document.querySelector('.magic-background').appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

setInterval(createSparkle, 100);

function createBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.backgroundColor = getRandomColor();
        balloonContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000); // Duración de la animación
    }, 1000); // Crear un globo cada segundo
}

function getRandomColor() {
    const colors = ['#4996a2', '#71c2cc', '#785471', '#e8cdc5', '#5699d2', '#d8ebf9']; // Colores personalizados
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('attend-button').addEventListener('click', function() {
    document.getElementById('attend-button').disabled = true;
    document.getElementById('rsvp-options').classList.toggle('hidden');
    setTimeout(() => {
        document.getElementById('attend-button').disabled = false;
    }, 10000);
});

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response-message').textContent = '¡Gracias! Te esperamos';
    document.getElementById('rsvp-options').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('response-message').textContent = '';
        document.getElementById('attend-button').classList.remove('hidden');
    }, 10000); // Oculta el mensaje y muestra el botón "¿Asistirás?" después de 10 segundos
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('response-message').textContent = '¡Qué lástima! Esperamos verte en otra ocasión.';
    document.getElementById('rsvp-options').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('response-message').textContent = '';
        document.getElementById('attend-button').classList.remove('hidden');
    }, 10000); // Oculta el mensaje y muestra el botón "¿Asistirás?" después de 10 segundos
});

createSnowflakes();
createBalloons(); // Iniciar la animación de los globos
