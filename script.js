const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});

const guideSearch = document.querySelector('#guide-search');
const romanianGuideGrid = document.querySelector('html[lang="ro"] .guides .guide-grid');
if (romanianGuideGrid && !romanianGuideGrid.querySelector('[data-ro-extra-guide]')) {
  romanianGuideGrid.insertAdjacentHTML('beforeend', `
    <article class="guide-card" data-ro-extra-guide data-level="beginner"><div class="guide-number">10</div><p class="tag">WINDOWS · RO</p><h3>Ajutor Windows pentru problemele de zi cu zi</h3><p>Începe cu pași siguri pentru actualizări, spațiu de stocare și un PC care pornește greu.</p><a href="windows/">Vezi ajutorul Windows <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="beginner"><div class="guide-number">11</div><p class="tag">DISPOZITIVE · RO</p><h3>Windows, Apple sau Android?</h3><p>Compară punctele forte ale fiecărui ecosistem înainte să cumperi un computer sau telefon nou.</p><a href="choose-your-platform/">Compară platformele <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">01</div><p class="tag">PLATFORME AI · RO</p><h3>Cum alegi o platformă AI</h3><p>Compară ChatGPT, Claude, Gemini, Copilot și alte instrumente în funcție de ce ai de făcut.</p><a href="articles/choosing-ai-platforms/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">02</div><p class="tag">WI‑FI · RO</p><h3>Wi‑Fi conectat, dar fără internet</h3><p>Află dacă problema este la dispozitiv, la router sau la furnizorul de internet.</p><a href="articles/wifi-connected-no-internet/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">03</div><p class="tag">ANDROID · RO</p><h3>Protejează-ți telefonul Android</h3><p>Setări simple pentru cazurile în care telefonul este pierdut, furat sau accesat de altcineva.</p><a href="articles/secure-your-android-phone/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">04</div><p class="tag">WINDOWS · RO</p><h3>Fă copie de siguranță unui PC Windows</h3><p>Protejează fișierele importante înainte ca o problemă, pierdere sau ștergere să le afecteze.</p><a href="articles/back-up-windows-pc/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">05</div><p class="tag">SIGURANȚĂ BROWSER · RO</p><h3>O listă simplă de siguranță pentru browser</h3><p>Obiceiuri utile pentru site-uri, descărcări și extensii mai sigure.</p><a href="articles/browser-safety-checklist/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">06</div><p class="tag">WHATSAPP · RO</p><h3>Cinci setări WhatsApp de confidențialitate</h3><p>Verifică securitatea contului, dispozitivele conectate și ce pot vedea contactele.</p><a href="articles/whatsapp-privacy-settings/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="intermediate"><div class="guide-number">07</div><p class="tag">WI‑FI DE ACASĂ · RO</p><h3>Fă routerul și Wi‑Fi-ul de acasă mai sigure</h3><p>Setări simple pentru parola de administrator, actualizări și dispozitive conectate.</p><a href="articles/secure-home-router/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="advanced"><div class="guide-number">01</div><p class="tag">CODEX · RO</p><h3>Planifică o actualizare de site cu Codex</h3><p>Transformă o idee într-o modificare clară, verificabilă și sigură pentru site.</p><a href="articles/plan-website-update-with-codex/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="advanced"><div class="guide-number">02</div><p class="tag">NETLIFY · RO</p><h3>Publică un site static pe Netlify</h3><p>O listă calmă pentru testare, publicare și verificarea actualizării live.</p><a href="articles/publish-static-site-on-netlify/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="advanced"><div class="guide-number">03</div><p class="tag">CONFIGURARE SITE · RO</p><h3>WordPress sau site static?</h3><p>Înțelege diferențele înainte să alegi unde și cum îți administrezi site-ul.</p><a href="articles/wordpress-or-static-site/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="advanced"><div class="guide-number">04</div><p class="tag">LOVABLE · RO</p><h3>Construiește o aplicație web cu Lovable</h3><p>Transformă o idee într-un prototip util, apoi verifică-l înainte să depindă cineva de el.</p><a href="articles/build-web-app-with-lovable/">Citește ghidul <span>→</span></a></article>
    <article class="guide-card" data-ro-extra-guide data-level="advanced"><div class="guide-number">05</div><p class="tag">GITHUB · RO</p><h3>Păstrează istoricul site-ului cu GitHub</h3><p>Folosește puncte de control clare ca să nu pierzi niciodată o versiune bună a site-ului.</p><a href="articles/keep-website-history-with-github/">Citește ghidul <span>→</span></a></article>
  `);
  const romanianGuideNote = document.querySelector('#ghiduri .section-heading > p');
  if (romanianGuideNote) romanianGuideNote.textContent = 'Toate cele 23 de ghiduri sunt acum disponibile în română.';
}
const guideCards = [...document.querySelectorAll('.guide-card')];
const emptySearch = document.querySelector('#search-empty');
const levelCards = [...document.querySelectorAll('.level-card')];
const guideGrid = document.querySelector('.guide-grid');
const levelNames = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };

if (guideGrid && guideCards.length) {
  const availableLevels = Object.keys(levelNames).filter((level) =>
    guideCards.some((card) => (card.dataset.level || 'beginner') === level)
  );
  const guideUnit = document.documentElement.lang === 'ro' ? 'ghiduri' : 'guides';
  const columns = availableLevels.map((level) => {
    const column = document.createElement('details');
    column.className = 'guide-level-column guide-accordion';
    column.dataset.level = level;
    const cardsForLevel = guideCards.filter((card) => (card.dataset.level || 'beginner') === level);
    column.innerHTML = `<summary class="guide-level-column-heading"><span>${level === 'beginner' ? '01' : level === 'intermediate' ? '02' : '03'}</span><h3>${levelNames[level]}</h3><small>${cardsForLevel.length} ${guideUnit}</small><b aria-hidden="true">+</b></summary>`;
    const cards = document.createElement('div');
    cards.className = 'guide-grid';
    cardsForLevel.forEach((card) => cards.append(card));
    column.append(cards);
    return column;
  });
  guideGrid.classList.add('guide-level-columns');
  guideGrid.replaceChildren(...columns);
}

function filterGuides() {
  const query = guideSearch?.value.trim().toLowerCase() || '';
  let visible = 0;
  guideCards.forEach((card) => {
    const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
    const match = matchesSearch;
    card.hidden = !match;
    if (match) visible += 1;
  });
  if (query) {
    document.querySelectorAll('.guide-accordion').forEach((accordion) => {
      accordion.open = [...accordion.querySelectorAll('.guide-card')].some((card) => !card.hidden);
    });
  }
  if (emptySearch) emptySearch.hidden = visible !== 0;
}

document.querySelector('.site-search')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#guides')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  filterGuides();
});
guideSearch?.addEventListener('input', filterGuides);

levelCards.forEach((levelCard) => {
  levelCard.addEventListener('click', () => {
    const selectedLevel = levelCard.dataset.level || '';
    levelCards.forEach((card) => {
      const active = card === levelCard;
      card.classList.toggle('active', active);
      card.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.guide-level-column').forEach((column) => {
      const active = column.dataset.level === selectedLevel;
      column.classList.toggle('highlight', active);
      if (column instanceof HTMLDetailsElement) column.open = active;
    });
    document.querySelector(`.guide-level-column[data-level="${selectedLevel}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

filterGuides();

// Load the shared analytics and consent component on pages that use this script.
if (!document.querySelector('script[data-it-assistant-analytics]')) {
  const analytics = document.createElement('script');
  analytics.dataset.itAssistantAnalytics = 'true';
  analytics.src = new URL('analytics.js', document.currentScript?.src || window.location.href).href;
  document.head.appendChild(analytics);
}

document.querySelectorAll('.platform-video').forEach((card) => {
  card.addEventListener('click', () => {
    const paused = card.classList.toggle('paused');
    card.setAttribute('aria-pressed', String(paused));
  });
});

const relatedGuides = {
  'back-up-windows-pc.html': [['free-up-windows-storage.html', 'Free up Windows storage safely'], ['manage-windows-startup-apps.html', 'Manage Windows startup apps']],
  'browser-safety-checklist.html': [['spot-a-phishing-email.html', 'How to spot a phishing email'], ['create-strong-passwords.html', 'Create strong passwords']],
  'check-online-shop-before-paying.html': [['spot-a-phishing-email.html', 'How to spot a phishing email'], ['browser-safety-checklist.html', 'Use a browser safety checklist']],
  'build-web-app-with-lovable.html': [['plan-website-update-with-codex.html', 'Plan a website update with Codex'], ['keep-website-history-with-github.html', 'Keep a safe history with GitHub']],
  'choosing-ai-platforms.html': [['plan-website-update-with-codex.html', 'Plan a website update with Codex'], ['build-web-app-with-lovable.html', 'Build a web app with Lovable']],
  'create-strong-passwords.html': [['enable-two-factor-authentication.html', 'Set up two-factor authentication safely'], ['browser-safety-checklist.html', 'Use a browser safety checklist']],
  'enable-two-factor-authentication.html': [['create-strong-passwords.html', 'Create strong passwords'], ['spot-a-phishing-email.html', 'How to spot a phishing email']],
  'fix-windows-bluetooth.html': [['fix-windows-printer.html', 'Fix a Windows printer'], ['manage-windows-startup-apps.html', 'Manage Windows startup apps']],
  'fix-windows-printer.html': [['fix-windows-bluetooth.html', 'Fix Windows Bluetooth pairing'], ['fix-windows-update.html', 'Fix Windows Update safely']],
  'fix-windows-update.html': [['free-up-windows-storage.html', 'Free up Windows storage safely'], ['back-up-windows-pc.html', 'Back up a Windows PC']],
  'free-up-iphone-storage.html': [['secure-your-android-phone.html', 'Secure an Android phone'], ['browser-safety-checklist.html', 'Use a browser safety checklist']],
  'free-up-windows-storage.html': [['manage-windows-startup-apps.html', 'Manage Windows startup apps'], ['fix-windows-update.html', 'Fix Windows Update safely']],
  'keep-website-history-with-github.html': [['plan-website-update-with-codex.html', 'Plan a website update with Codex'], ['publish-static-site-on-netlify.html', 'Publish a static site on Netlify']],
  'manage-windows-startup-apps.html': [['free-up-windows-storage.html', 'Free up Windows storage safely'], ['fix-windows-update.html', 'Fix Windows Update safely']],
  'plan-website-update-with-codex.html': [['keep-website-history-with-github.html', 'Keep a safe history with GitHub'], ['publish-static-site-on-netlify.html', 'Publish a static site on Netlify']],
  'publish-static-site-on-netlify.html': [['wordpress-or-static-site.html', 'WordPress or a static site?'], ['keep-website-history-with-github.html', 'Keep a safe history with GitHub']],
  'secure-home-router.html': [['secure-home-wifi.html', 'Make home Wi-Fi safer'], ['wifi-connected-no-internet.html', 'Wi-Fi connected but no internet?']],
  'secure-your-android-phone.html': [['enable-two-factor-authentication.html', 'Set up two-factor authentication safely'], ['free-up-iphone-storage.html', 'Free up iPhone storage safely']],
  'whatsapp-privacy-settings.html': [['secure-your-android-phone.html', 'Secure an Android phone'], ['enable-two-factor-authentication.html', 'Set up two-factor authentication safely']],
  'wifi-connected-no-internet.html': [['secure-home-wifi.html', 'Make home Wi-Fi safer'], ['secure-home-router.html', 'Make your home router safer']],
  'wordpress-or-static-site.html': [['publish-static-site-on-netlify.html', 'Publish a static site on Netlify'], ['build-web-app-with-lovable.html', 'Build a web app with Lovable']]
};

const currentGuide = window.location.pathname.split('/').pop();
const recommendations = relatedGuides[currentGuide];
if (recommendations) {
  const articleContent = document.querySelector('.article-content');
  let related = articleContent?.querySelector('.related');
  if (articleContent && !related) {
    related = document.createElement('section');
    related.className = 'related';
    articleContent.append(related);
  }
  if (related) {
    related.innerHTML = `<p class="eyebrow blue"><i></i> RELATED GUIDES</p><div class="related-links">${recommendations.map(([url, title]) => `<a href="${url}">${title} <span>→</span></a>`).join('')}</div>`;
  }
}
