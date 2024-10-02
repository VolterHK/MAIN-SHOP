const translations = {
    es: {
        welcome: "¡Bienvenido a Main Shop!",
        description: "¡Las mejores herramientas para tu juego!",
        buy: "Compra Ahora",
        learn: "Aprende Más"
    },
    en: {
        welcome: "Welcome to Main Shop!",
        description: "The best tools for your game!",
        buy: "Buy Now",
        learn: "Learn More"
    }
};

const languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateText(selectedLanguage);
});

function updateText(language) {
    document.getElementById('welcome-message').innerText = translations[language].welcome;
    document.getElementById('description').innerText = translations[language].description;
    document.getElementById('buy-button').innerText = translations[language].buy;
    document.getElementById('learn-button').innerText = translations[language].learn;
}

// Inicia con el idioma por defecto
updateText('es');
