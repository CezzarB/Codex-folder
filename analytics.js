(() => {
  const measurementId = 'G-RP7QRQJS03';
  const consentKey = 'it-assistant-analytics-consent';

  function loadAnalytics() {
    if (window.itAssistantAnalyticsLoaded) return;
    window.itAssistantAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(tag);
  }

  function saveChoice(choice) {
    localStorage.setItem(consentKey, choice);
    document.querySelector('.cookie-banner')?.remove();
    if (choice === 'accepted') loadAnalytics();
  }

  function showBanner() {
    const banner = document.createElement('section');
    const privacyUrl = location.pathname.includes('/articles/') ? '../privacy.html' : 'privacy.html';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Analytics cookie choice');
    banner.innerHTML = `<p><strong>Help us improve IT Assistant</strong><br>With your permission, Google Analytics uses cookies to measure visits and improve our guides. <a href="${privacyUrl}">Privacy policy</a></p><div><button class="cookie-reject" type="button">No thanks</button><button class="cookie-accept" type="button">Accept analytics</button></div>`;
    document.body.appendChild(banner);
    banner.querySelector('.cookie-reject').addEventListener('click', () => saveChoice('rejected'));
    banner.querySelector('.cookie-accept').addEventListener('click', () => saveChoice('accepted'));
  }

  const choice = localStorage.getItem(consentKey);
  if (choice === 'accepted') loadAnalytics();
  if (!choice) showBanner();
})();
