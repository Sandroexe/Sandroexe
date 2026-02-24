// footer.js - Nutzt config.js um Footer mit Social Media Icons zu generieren

function getSvgIcon(iconName) {
    return svgIcons[iconName] || '';  
}

function createFooter() {
    const footerContainer = document.getElementById('central-footer');
    
    if (!footerContainer) {
        console.warn('Element mit ID "central-footer" nicht gefunden!');
        return;
    }

    let html = '<div class="footer-container">';
    
    // Kontaktinfo
    html += `<p style="margin-bottom: 1rem;">
        <a href="tel:${siteConfig.phone}" style="font-size: 1rem; font-weight: 500;">
            📞 ${siteConfig.phone}
        </a>
    </p>`;
    
    // Social Media Icons
    if (siteConfig.socialMedia && siteConfig.socialMedia.length > 0) {
        html += '<div class="social-icons">';
        siteConfig.socialMedia.forEach(social => {
            const svgIcon = getSvgIcon(social.icon);
            html += `
                <a href="${social.url}" target="_blank" rel="noopener noreferrer" title="${social.name}" class="social-link">
                    ${svgIcon}
                </a>
            `;
        });
        html += '</div>';
    }
    
    // Legal Links
    html += `
        <div class="legal-links">
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
        </div>
    `;
    
    html += '</div>';
    footerContainer.innerHTML = html;
}

// Beim Laden der Seite ausführen
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFooter);
} else {
    createFooter();
}