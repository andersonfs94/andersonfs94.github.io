document.addEventListener('DOMContentLoaded', function() {
    // Get the language toggle button element by its ID
    const languageToggleButton = document.getElementById('language-toggle');

    // If the button is not found, log an error and exit
    if (!languageToggleButton) {
        console.error('Language toggle button not found.');
        return;
    }

    // Retrieve the current language from localStorage or default to 'pt'
    let currentLanguage = localStorage.getItem('language') || 'pt';

    // Function to update the text on the page based on the selected language
    function updateText(language) {
        // Select all elements with 'data-pt' or 'data-en' attributes
        document.querySelectorAll('[data-pt], [data-en]').forEach(el => {
            // Update the text content of the element based on the selected language
            el.textContent = el.getAttribute(`data-${language}`);
        });
    }

    // Initial text update based on the current language
    updateText(currentLanguage);

    // Add an event listener to the language toggle button
    languageToggleButton.addEventListener('click', function() {
        // Toggle between 'pt' and 'en'
        currentLanguage = (currentLanguage === 'pt') ? 'en' : 'pt';
        // Save the new language choice to localStorage
        localStorage.setItem('language', currentLanguage);
        // Update the button's data-language attribute and text based on the new language
        languageToggleButton.setAttribute('data-language', currentLanguage);
        languageToggleButton.textContent = (currentLanguage === 'pt') ? 'Mudar para Inglês' : 'Change to Portuguese';
        
        // Update the text content of the page based on the new language
        updateText(currentLanguage);
    });

    // Set the initial text content of the button based on the current language
    languageToggleButton.textContent = (currentLanguage === 'pt') ? 'Mudar para Inglês' : 'Change to Portuguese';
});