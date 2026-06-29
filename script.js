/* ================================================================
   VANGUARD THEME - ENGINE v8.0 (CLOUDYMEADOW OPTIMIZED - PURE VN)
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initSocials();
    applyTexts();
    fetchStatus();
});

function applyTexts() {
    const ui = config.interface;

    // Cập nhật text giao diện từ config.interface
    setText('nav-home', ui.nav.home);
    setText('nav-staff', ui.nav.staff);
    setText('nav-rules', ui.nav.rules);
    setText('nav-faq', ui.nav.faq); 
    setText('hero-subtitle', ui.hero.subtitle);
    setText('hero-btn-copy', ui.hero.btn_copy);
    setText('hero-online', ui.hero.online);
    setText('title-staff', ui.titles.staff);
    setText('title-rules', ui.titles.rules);
    setText('title-faq', ui.titles.faq); 
    setText('title-legal', ui.titles.legal);

    setText('tab-tos', ui.legal_tabs.tos);
    setText('tab-notice', ui.legal_tabs.notice);
    setText('tab-priv', ui.legal_tabs.priv);

    // --- TỰ ĐỘNG THÊM NÚT CUSTOM ENCHANT VÀO CUỐI MENU ---
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && !document.getElementById('nav-custom-enchant')) {
        const enchantLi = document.createElement('li');
        enchantLi.innerHTML = `<a href="enchant.html" id="nav-custom-enchant" target="_blank" style="color: #7ec2eb; font-weight: 700;">CUSTOM ENCHANT</a>`;
        navMenu.appendChild(enchantLi);
    }

    // Render danh sách Đội ngũ (Staff) - Không dùng suffix_
    renderGrid('staff-container', config.content.staff, (m) => `
        <div class="staff-card">
            <img src="https://minotar.net/helm/${m.name}/100.png" class="staff-head">
            <div class="staff-name">${m.name}</div>
            <div class="staff-role">${m.role}</div>
            <div class="staff-bio">${m.bio}</div>
        </div>
     `);

    // Render danh sách Luật (Rules) - Không dùng suffix_
    renderGrid('rules-container', config.content.rules, (r) => `
        <div class="rule-card">
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
        </div>
     `);

    // Render danh sách FAQ (Lệnh & Cách chơi) - Không dùng suffix_
    renderGrid('faq-container', config.content.faq, (f) => `
        <div class="faq-item" onclick="toggleFaq(this)">
            <div class="faq-header">
                <span class="faq-q">${f.q}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-body">
                <div class="faq-inner">
                    <p class="faq-a">${f.a}</p>
                </div>
            </div>
        </div>
     `);

    // Gán nội dung HTML cho các tab Chính sách (Legal)
    if(document.getElementById('legal-tos')) document.getElementById('legal-tos').innerHTML = config.content.legal.tos;
    if(document.getElementById('legal-notice')) document.getElementById('legal-notice').innerHTML = config.content.legal.notice;
    if(document.getElementById('legal-priv')) document.getElementById('legal-priv').innerHTML = config.content.legal.priv;

    // Đồng bộ hóa Tên Server chia khối màu cho Logo dạng text
    const logoText = document.getElementById('nav-logo-text');
    if (logoText) logoText.innerHTML = `${config.serverName.substring(0, 6)}<span>${config.serverName.substring(6)}</span>`;
    
    setText('footer-name', config.serverName);
    setText('ip-display', config.serverIp);
    const logo = document.getElementById('hero-logo-img');
    if(config.serverLogo && logo) logo.src = config.serverLogo;
}

function copyIp() {
    const wrapper = document.querySelector('.ip-wrapper');
    const actionText = document.getElementById('hero-btn-copy');
    navigator.clipboard.writeText(config.serverIp).then(() => {
        wrapper.classList.add('copied');
        actionText.innerText = "ĐÃ COPIED!";
        setTimeout(() => {
            wrapper.classList.remove('copied');
            actionText.innerText = config.interface.hero.btn_copy;
        }, 2000);
    });
}

function initSocials() {
    const c = document.getElementById('social-container');
    if(!c) return;
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
    if(document.getElementById('legal-'+id)) document.getElementById('legal-'+id).classList.add('active');
    if(document.getElementById('tab-'+id)) document.getElementById('tab-'+id).classList.add('active');
}

function toggleFaq(el) {
    el.classList.toggle('active');
}

function renderGrid(id, arr, fn) {
    const el = document.getElementById(id); if(el) el.innerHTML = '';
    if(el && arr) arr.forEach(i => el.innerHTML += fn(i));
}

function setText(id, txt) { if(document.getElementById(id)) document.getElementById(id).innerText = txt; }

function fetchStatus() {
    fetch(`https://api.mcsrvstat.us/2/${config.serverIp}`)
        .then(r=>r.json())
        .then(d => {
            const el = document.getElementById('player-count');
            if(el) el.innerText = d.online ? d.players.online : '-';
        })
        .catch(() => {
            const el = document.getElementById('player-count');
            if(el) el.innerText = '-';
        });
}

function initParticles() {
    const c = document.getElementById('particles');
    if(!c) return;
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
