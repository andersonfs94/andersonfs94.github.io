// JavaScript to handle language toggle
document.getElementById("language-toggle").addEventListener("click", function () {
    // Get all certificate links
    const links = document.querySelectorAll(".certificate-link");

    links.forEach(link => {
        // Toggle between languages
        const currentLang = link.href.includes("lang=pt_BR") ? "pt_BR" : "en";
        const newLang = currentLang === "pt_BR" ? "en" : "pt_BR";

        // Update the href attribute
        link.href = link.href.replace(`lang=${currentLang}`, `lang=${newLang}`);
        
        // Update link text based on data attributes
        link.textContent = link.getAttribute(`data-${newLang === "pt_BR" ? "pt" : "en"}`);
    });

    // Update the button text
    this.textContent = this.textContent.includes("English") ? "Mudar para Português" : "Change to English";
});