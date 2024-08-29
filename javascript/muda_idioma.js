document.addEventListener('DOMContentLoaded', function() {
    const languageToggleButton = document.getElementById('language-toggle');

    if (!languageToggleButton) {
        console.error('Language toggle button not found.');
        return;
    }

    // Set default language if not set
    let currentLanguage = languageToggleButton.getAttribute('data-language') || 'pt';

    // Function to update text based on language
    function updateText(language) {
        document.querySelectorAll('[data-pt], [data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${language}`);
        });
    }

    // Initial text update
    updateText(currentLanguage);

    // Event listener for button click
    languageToggleButton.addEventListener('click', function() {
        // Toggle between languages
        currentLanguage = (currentLanguage === 'pt') ? 'en' : 'pt';
        languageToggleButton.setAttribute('data-language', currentLanguage);
        languageToggleButton.textContent = (currentLanguage === 'pt') ? 'Change to English' : 'Mudar para Português';
        
        // Update page text
        updateText(currentLanguage);
    });
});
