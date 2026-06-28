/* ================================================================
   VANGUARD THEME - ENGINE v8.0
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initCustomLanguage();
    initSocials();
    initVoteCards();
    
    // AUTO DETECTAR IDIOMA
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = userLang.startsWith('es') ? 'es' : 'en';
    
    changeLanguage(defaultLang);
    fetchStatus();

    document.addEventListener('click', (e) => {
        const drop = document.getElementById('lang-list');
        const trigger = document.getElementById('lang-dropdown-trigger');
        if(!trigger.contains(e.target)) drop.classList.remove('show');
    });
});

let currentLangCode = 'es';

function changeLanguage(key) {
    currentLangCode = key;
    const ui = config.interface[key];
    const suffix = '_' + key; // _es o _en

    // UI Updates
    document.getElementById('current-flag').className = `fi fi-${ui.flag}`;
    document.getElementById('current-lang-name').innerText = ui.name;

    setText('nav-home', ui.nav.home);
    setText('nav-staff', ui.nav.staff);
    setText('nav-rules', ui.nav.rules);
    setText('nav-faq', ui.nav.faq);
    setText('nav-vote', ui.nav.vote);
    setText('hero-subtitle', ui.hero.subtitle);
    setText('hero-btn-copy', ui.hero.btn_copy);
    setText('hero-online', ui.hero.online);
    setText('title-staff', ui.titles.staff);
    setText('title-rules', ui.titles.rules);
    setText('title-faq', ui.titles.faq);
    setText('title-vote', ui.titles.vote);
    setText('title-legal', ui.titles.legal);

    setText('tab-tos', ui.legal_tabs.tos);
    setText('tab-notice', ui.legal_tabs.notice);
    setText('tab-priv', ui.legal_tabs.priv);

    // Contenido Dinámico Unificado
    renderGrid('staff-container', config.content.staff, (m) => `
        <div class="staff-card">
            <img src="https://minotar.net/helm/${m.name}/100.png" class="staff-head">
            <div class="staff-name">${m.name}</div>
            <div class="staff-role">${m.role}</div>
            <div class="staff-bio">${m['bio' + suffix]}</div>
        </div>
    `);

    renderGrid('rules-container', config.content.rules, (r) => `
        <div class="rule-card">
            <h3>${r['title' + suffix]}</h3>
            <p>${r['desc' + suffix]}</p>
        </div>
    `);

    // FAQ con Grid Animation Support
    const faqCont = document.getElementById('faq-container');
    faqCont.innerHTML = '';
    config.content.faq.forEach(f => {
        faqCont.innerHTML += `
            <div class="faq-item" onclick="toggleFaq(this)">
                <div class="faq-header">
                    <span class="faq-q">${f['q' + suffix]}</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-body">
                    <div class="faq-inner">
                        <div class="faq-a">${f['a' + suffix]}</div>
                    </div>
                </div>
            </div>
        `;
    });

    // Legal (HTML)
    document.getElementById('legal-tos').innerHTML = config.content.legal['tos' + suffix];
    document.getElementById('legal-notice').innerHTML = config.content.legal['notice' + suffix];
    document.getElementById('legal-priv').innerHTML = config.content.legal['priv' + suffix];

    // Info General
    setText('nav-logo-text', config.serverName);
    setText('footer-name', config.serverName);
    setText('ip-display', config.serverIp);
    const logo = document.getElementById('hero-logo-img');
    if(config.serverLogo) logo.src = config.serverLogo;
}

function toggleFaq(el) {
    el.classList.toggle('active');
}

function initCustomLanguage() {
    const list = document.getElementById('lang-list');
    const trigger = document.getElementById('lang-dropdown-trigger');
    ['es', 'en'].forEach(key => {
        const div = document.createElement('div');
        div.className = 'lang-option';
        div.innerHTML = `<span class="fi fi-${config.interface[key].flag}"></span> ${config.interface[key].name}`;
        div.onclick = () => { changeLanguage(key); list.classList.remove('show'); };
        list.appendChild(div);
    });
    trigger.onclick = () => list.classList.toggle('show');
}

function copyIp() {
    const wrapper = document.querySelector('.ip-wrapper');
    const actionText = document.getElementById('hero-btn-copy');
    navigator.clipboard.writeText(config.serverIp).then(() => {
        wrapper.classList.add('copied');
        actionText.innerText = "¡COPIADO!";
        setTimeout(() => {
            wrapper.classList.remove('copied');
            actionText.innerText = config.interface[currentLangCode].hero.btn_copy;
        }, 2000);
    });
}

function initVoteCards() {
    const c = document.getElementById('vote-container');
    config.voteLinks.forEach(v => {
        c.innerHTML += `<a href="${v.url}" target="_blank" class="vote-card"><h3>${v.name}</h3><span>CLICK PARA VOTAR</span></a>`;
    });
}

function initSocials() {
    const c = document.getElementById('social-container');
    const s = config.social;
    const add = (i, l) => c.innerHTML += `<a href="${l}" target="_blank" class="social-icon"><i class="${i}"></i></a>`;
    if(s.discord) add('fab fa-discord', s.discord);
    if(s.twitter) add('fab fa-twitter', s.twitter);
    if(s.instagram) add('fab fa-instagram', s.instagram);
    if(s.tiktok) add('fab fa-tiktok', s.tiktok);
    if(s.youtube) add('fab fa-youtube', s.youtube);
    if(s.store) add('fas fa-shopping-cart', s.store);
}

function openLegal(id) {
    document.querySelectorAll('.l-content').forEach(d=>d.classList.remove('active'));
    document.querySelectorAll('.l-tab').forEach(b=>b.classList.remove('active'));
    document.getElementById('legal-'+id).classList.add('active');
    document.getElementById('tab-'+id).classList.add('active');
}

function renderGrid(id, arr, fn) {
    const el = document.getElementById(id); el.innerHTML = '';
    arr.forEach(i => el.innerHTML += fn(i));
}
function setText(id, txt) { if(document.getElementById(id)) document.getElementById(id).innerText = txt; }
function fetchStatus() {
    fetch(`https://api.mcsrvstat.us/2/${config.serverIp}`)
        .then(r=>r.json()).then(d => document.getElementById('player-count').innerText = d.online ? d.players.online : '-');
}
function initParticles() {
    const c = document.getElementById('particles');
    for(let i=0; i<25; i++) {
        let p = document.createElement('div');
        p.className = 'particle';
        let size = Math.random()*30+10;
        p.style.width=size+'px'; p.style.height=size+'px';
        p.style.left=Math.random()*100+'%';
        p.style.animationDuration=(Math.random()*15+10)+'s';
        c.appendChild(p);
    }
}