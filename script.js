/* ================================================================
   VANGUARD THEME - ENGINE v8.0 (CLOUDYMEADOW OPTIMIZED - MULTI-PAGE)
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initSocials();
    applyTexts();
    fetchStatus();
});

function applyTexts() {
    const ui = config.interface;

    // Cập nhật text giao diện từ config.interface (An toàn cho multi-page)
    if(ui) {
        if(ui.nav) {
            setText('nav-home', ui.nav.home);
            setText('nav-staff', ui.nav.staff);
            setText('nav-rules', ui.nav.rules);
            setText('nav-faq', ui.nav.faq); 
            setText('nav-fish', ui.nav.fish);       
            setText('nav-enchant', ui.nav.enchant);
        }

        if(ui.hero) {
            setText('hero-subtitle', ui.hero.subtitle);
            setText('hero-btn-copy', ui.hero.btn_copy);
            setText('hero-online', ui.hero.online);
        }

        if(ui.titles) {
            setText('title-staff', ui.titles.staff);
            setText('title-rules', ui.titles.rules);
            setText('title-faq', ui.titles.faq); 
            setText('title-legal', ui.titles.legal);
        }

        if(ui.legal_tabs) {
            setText('tab-tos', ui.legal_tabs.tos);
            setText('tab-notice', ui.legal_tabs.notice);
            setText('tab-priv', ui.legal_tabs.priv);
        }
    }

    // Render danh sách Đội ngũ (Đã tối ưu hóa hỗ trợ acc crack mượn skinName)
    if (document.getElementById('staff-container') && config.content?.staff) {
        renderGrid('staff-container', config.content.staff, (m) => {
            // Kiểm tra: Nếu có thuộc tính skinName thì fetch theo skinName, ngược lại fetch theo name gốc
            const skinToFetch = m.skinName ? m.skinName : m.name;

            return `
                <div class="staff-card">
                    <img src="https://minotar.net/helm/${skinToFetch}/100.png" class="staff-head" alt="${m.name}">
                    <div class="staff-name">${m.name}</div>
                    <div class="staff-role">${m.role}</div>
                    <div class="staff-bio">${m.bio}</div>
                </div>
            `;
        });
    }

    // Render danh sách Luật (Chỉ chạy nếu có vùng chứa)
    if (document.getElementById('rules-container') && config.content?.rules) {
        renderGrid('rules-container', config.content.rules, (r) => `
            <div class="rule-card">
                <h3>${r.title}</h3>
                <p>${r.desc}</p>
            </div>
        `);
    }

    // Render danh sách FAQ (Chỉ chạy nếu có vùng chứa)
    if (document.getElementById('faq-container') && config.content?.faq) {
        renderGrid('faq-container', config.content.faq, (f) => `
            <div class="faq-item" onclick="toggleFaq(this)">
                <div class="faq-header">
                    <span class="faq-q">${f.q}</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-body">
                    <div class="faq-inner">
                        <div class="faq-a">${f.a}</div>
                    </div>
                </div>
            </div>
        `);
    }

    // Gán nội dung HTML cho các tab Chính sách (Chỉ chạy ở trang chủ index.html)
    if(config.content?.legal) {
        if(document.getElementById('legal-tos')) document.getElementById('legal-tos').innerHTML = config.content.legal.tos;
        if(document.getElementById('legal-notice')) document.getElementById('legal-notice').innerHTML = config.content.legal.notice;
        if(document.getElementById('legal-priv')) document.getElementById('legal-priv').innerHTML = config.content.legal.priv;
    }

    // Đồng bộ hóa Tên Server chia khối màu cho Logo dạng text
    const logoText = document.getElementById('nav-logo-text');
    if (logoText && config.serverName) {
        if(config.serverName.length > 6) {
            logoText.innerHTML = `${config.serverName.substring(0, 6)}<span>${config.serverName.substring(6)}</span>`;
        } else {
            logoText.innerHTML = `<span>${config.serverName}</span>`;
        }
    }
    
    setText('footer-name', config.serverName);
    setText('ip-display', config.serverIp);
    
    const logo = document.getElementById('hero-logo-img');
    if(config.serverLogo && logo) logo.src = config.serverLogo;
}

function copyIp() {
    const wrapper = document.querySelector('.ip-wrapper');
    const actionText = document.getElementById('hero-btn-copy');
    if (!wrapper || !actionText) return;
    
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
    c.innerHTML = '';
    const s = config.social;
    if(!s) return;
    
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

// TỐI ƯU HÓA HÀM RENDER GRID: Tạo chuỗi tổng trước rồi gán một lần để mượt mà khi load iframe video
function renderGrid(id, arr, fn) {
    const el = document.getElementById(id); 
    if(el) {
        let htmlContent = '';
        if(arr) {
            arr.forEach(i => htmlContent += fn(i));
        }
        el.innerHTML = htmlContent;
    }
}

function setText(id, txt) { 
    const el = document.getElementById(id);
    if(el && txt) el.innerText = txt; 
}

function fetchStatus() {
    const el = document.getElementById('player-count');
    if(!el) return;
    
    fetch(`https://api.mcsrvstat.us/2/${config.serverIp}`)
        .then(r=>r.json())
        .then(d => {
            el.innerText = (d && d.online) ? d.players.online : '-';
        })
        .catch(() => {
            el.innerText = '-';
        });
}

function initParticles() {
    const c = document.getElementById('particles');
    if(!c) return;
    c.innerHTML = '';
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
/* ================================================================
   CLOUDYMEADOW FLOATING SUPPORT WIDGET ENGINE (ES6)
   ================================================================ */
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const widget = document.getElementById("cm-widget-container");
        const toggleBtn = document.getElementById("cm-widget-toggle");
        const menu = document.getElementById("cm-widget-menu");
        
        if (!widget || !toggleBtn || !menu) return;

        let isDragging = false;
        let startX = 0, startY = 0;
        let initialLeft = 0, initialTop = 0;
        let hasMoved = false;

        setTimeout(() => {
            widget.classList.remove("cm-widget-hidden");
            widget.classList.add("cm-widget-visible");
            setTimeout(restorePosition, 500);
        }, 300);

        const onStart = (e) => {
            if (e.target.closest("#cm-widget-menu")) return;

            isDragging = true;
            hasMoved = false;
            widget.style.transition = "none";

            const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

            startX = clientX;
            startY = clientY;

            const rect = widget.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
        };

        const onMove = (e) => {
            if (!isDragging) return;

            const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

            const deltaX = clientX - startX;
            const deltaY = clientY - startY;

            if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                hasMoved = true;
                if (menu.classList.contains("cm-widget-menu-open")) {
                    closeMenu();
                }
            }

            let newLeft = initialLeft + deltaX;
            let newTop = initialTop + deltaY;

            const padding = 10;
            const maxLeft = window.innerWidth - widget.offsetWidth - padding;
            const maxTop = window.innerHeight - widget.offsetHeight - padding;

            newLeft = Math.max(padding, Math.min(newLeft, maxLeft));
            newTop = Math.max(padding, Math.min(newTop, maxTop));

            widget.style.left = `${newLeft}px`;
            widget.style.top = `${newTop}px`;
            widget.style.right = "auto";
            widget.style.bottom = "auto";
        };

        const onEnd = () => {
            if (!isDragging) return;
            isDragging = false;

            if (hasMoved) {
                snapToEdge();
            }
        };

        widget.addEventListener("mousedown", onStart);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onEnd);

        widget.addEventListener("touchstart", onStart, { passive: true });
        window.addEventListener("touchmove", onMove, { passive: false });
        window.addEventListener("touchend", onEnd);

        const snapToEdge = () => {
            widget.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            const rect = widget.getBoundingClientRect();
            const screenWidth = window.innerWidth;
            const widgetWidth = widget.offsetWidth;
            const padding = 20;

            let targetLeft = padding;
            if ((rect.left + widgetWidth / 2) > screenWidth / 2) {
                targetLeft = screenWidth - widgetWidth - padding;
                menu.style.transformOrigin = "bottom right";
            } else {
                menu.style.transformOrigin = "bottom left";
            }

            widget.style.left = `${targetLeft}px`;
            
            setTimeout(() => {
                localStorage.setItem("cm_widget_x", targetLeft);
                localStorage.setItem("cm_widget_y", rect.top);
            }, 400);
        };

        function restorePosition() {
            const savedX = localStorage.getItem("cm_widget_x");
            const savedY = localStorage.getItem("cm_widget_y");

            if (savedX !== null && savedY !== null) {
                const padding = 10;
                let finalX = parseInt(savedX, 10);
                let finalY = parseInt(savedY, 10);

                const maxLeft = window.innerWidth - widget.offsetWidth - padding;
                const maxTop = window.innerHeight - widget.offsetHeight - padding;

                finalX = Math.max(padding, Math.min(finalX, maxLeft));
                finalY = Math.max(padding, Math.min(finalY, maxTop));

                widget.style.transition = "none";
                widget.style.left = `${finalX}px`;
                widget.style.top = `${finalY}px`;
                widget.style.right = "auto";
                widget.style.bottom = "auto";

                if ((finalX + widget.offsetWidth / 2) > window.innerWidth / 2) {
                    menu.style.transformOrigin = "bottom right";
                } else {
                    menu.style.transformOrigin = "bottom left";
                }
            }
        }

        const toggleMenu = () => {
            if (menu.classList.contains("cm-widget-menu-closed")) {
                menu.classList.remove("cm-widget-menu-closed");
                menu.classList.add("cm-widget-menu-open");
            } else {
                closeMenu();
            }
        };

        const closeMenu = () => {
            menu.classList.remove("cm-widget-menu-open");
            menu.classList.add("cm-widget-menu-closed");
        };

        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!hasMoved) {
                toggleMenu();
            }
        });

        document.addEventListener("click", (e) => {
            if (!widget.contains(e.target)) {
                closeMenu();
            }
        });

        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (widget.style.left !== "" && widget.style.left !== "auto") {
                    snapToEdge();
                }
            }, 200);
        });
    });
})();
