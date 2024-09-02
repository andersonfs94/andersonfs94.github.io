// JavaScript to handle language toggle
document.getElementById("language-toggle").addEventListener("click", function () {
    const language = this.getAttribute('data-language') === 'pt' ? 'en' : 'pt';

    // Update all text elements with data- attributes
    document.querySelectorAll('[data-pt]').forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });

    // Toggle the language data attribute on the button
    this.setAttribute('data-language', language);
    this.textContent = this.getAttribute(`data-${language}`);
});