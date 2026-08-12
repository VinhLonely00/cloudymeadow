/* ================================================================
   VANGUARD THEME - ENGINE v8.0 (ANTI-TRICK DISCORD AUTH)
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initSocials();
    applyTexts();
    fetchStatus();
    checkDiscordAuth(); // Khởi tạo và kiểm tra trạng thái hiển thị IP tinh chỉnh chống trick
});

function applyTexts() {
    const ui = config.interface;

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

    if (document.getElementById('staff-container') && config.content?.staff) {
        renderGrid('staff-container', config.content.staff, (m) => {
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

    if (document.getElementById('rules-container') && config.content?.rules) {
        renderGrid('rules-container', config.content.rules, (r) => `
            <div class="rule-card">
                <h3>${r.title}</h3>
                <p>${r.desc}</p>
            </div>
        `);
    }

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

    if(config.content?.legal) {
        if(document.getElementById('legal-tos')) document.getElementById('legal-tos').innerHTML = config.content.legal.tos;
        if(document.getElementById('legal-notice')) document.getElementById('legal-notice').innerHTML = config.content.legal.notice;
        if(document.getElementById('legal-priv')) document.getElementById('legal-priv').innerHTML = config.content.legal.priv;
    }

    const logoText = document.getElementById('nav-logo-text');
    if (logoText && config.serverName) {
        if(config.serverName.length > 6) {
            logoText.innerHTML = `${config.serverName.substring(0, 6)}<span>${config.serverName.substring(6)}</span>`;
        } else {
            logoText.innerHTML = `<span>${config.serverName}</span>`;
        }
    }
    
    setText('footer-name', config.serverName);
    
    const logo = document.getElementById('hero-logo-img');
    if(config.serverLogo && logo) logo.src = config.serverLogo;
}

// --- LOGIC KIỂM TRA CHỐNG TRICK LỎ ---
function checkDiscordAuth() {
    // Thu thập nguồn gốc trang trước đó xem có phải chuyển hướng ngược từ Discord về không
    const referrer = document.referrer.toLowerCase();
    
    // Nếu người dùng đi từ discord.com quay trở lại, lập tức kích hoạt trạng thái mở khóa vĩnh viễn
    if (referrer.includes('discord.com')) {
        localStorage.setItem("cm_verified_ip", "true");
    }

    const isVerified = localStorage.getItem("cm_verified_ip");
    const loginBox = document.getElementById('auth-login-box');
    const loadingBox = document.getElementById('auth-loading-box');
    const successBox = document.getElementById('auth-success-box');
    const ipDisplay = document.getElementById('ip-display');

    if (ipDisplay) ipDisplay.innerText = config.serverIp;

    if (isVerified === "true") {
        // Trạng thái 3: Đã xác thực thực tế -> Mở khối hiện IP công khai
        if(loginBox) loginBox.style.display = 'none';
        if(loadingBox) loadingBox.style.display = 'none';
        if(successBox) successBox.style.display = 'flex';
    } else {
        // Trạng thái 1: Chưa xác thực -> Bắt buộc hiện nút Đăng nhập
        if(loginBox) loginBox.style.display = 'flex';
        if(loadingBox) loadingBox.style.display = 'none';
        if(successBox) successBox.style.display = 'none';
    }
}

// HÀM CLICK: XÓA TRANG HIỆN TẠI - ĐÈ LỜI MỜI DISCORD LÊN NGAY LẬP TỨC
function loginWithDiscord() {
    const errorMsg = document.getElementById('auth-error-msg');

    if (!config.social || !config.social.discord) {
        if(errorMsg) {
            errorMsg.innerText = "Lỗi: Không tìm thấy link Discord trong config.js!";
            errorMsg.style.display = "block";
        }
        return;
    }

    // Tuyệt đối KHÔNG lưu localStorage ở đây để chặn đứng hành vi nhấn xong tắt tab.
    // Thực hiện xóa hoàn toàn lịch sử trang hiện tại và nạp thẳng link mời Discord vào cửa sổ này.
    window.location.replace(config.social.discord);
}

// Hành động sao chép IP khi ở Trạng thái 3
function copyIp() {
    const actionText = document.getElementById('hero-btn-copy');
    const successBox = document.getElementById('auth-success-box');

    if (!actionText || !successBox) return;
    
    navigator.clipboard.writeText(config.serverIp).then(() => {
        successBox.classList.add('copied');
        actionText.innerText = "ĐÃ COPY!";
        setTimeout(() => {
            successBox.classList.remove('copied');
            actionText.innerText = config.interface?.hero?.btn_copy || "SAO CHÉP";
        }, 2000);
    });
}

// --- XỬ LÝ CHUYỂN ĐỔI TAB CHÍNH SÁCH ---
function openLegal(tabName) {
    const contents = document.querySelectorAll('.l-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.l-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const targetContent = document.getElementById(`legal-${tabName}`);
    if (targetContent) targetContent.classList.add('active');

    const targetTab = document.getElementById(`tab-${tabName}`);
    if (targetTab) targetTab.classList.add('active');
}

// --- HÀM BỔ TRỢ HỆ THỐNG CƠ BẢN ---
function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.innerText = value;
}

function renderGrid(containerId, items, templateFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(templateFn).join('');
}

function toggleFaq(element) {
    element.classList.toggle('active');
}

function initSocials() {
    if (!config.social || !document.getElementById('social-container')) return;
    
    let html = '';
    if(config.social.discord) html += `<a href="${config.social.discord}" target="_blank" class="social-icon"><i class="fab fa-discord"></i></a>`;
    if(config.social.tiktok) html += `<a href="${config.social.tiktok}" target="_blank" class="social-icon"><i class="fab fa-tiktok"></i></a>`;
    if(config.social.youtube) html += `<a href="${config.social.youtube}" target="_blank" class="social-icon"><i class="fab fa-youtube"></i></a>`;
    
    document.getElementById('social-container').innerHTML = html;
}

function fetchStatus() {
    const countEl = document.getElementById('player-count');
    if (!countEl) return;
    fetch(`https://api.mcsrvstat.us/2/${config.serverIp}`)
        .then(res => res.json())
        .then(data => {
            if (data.online && data.players) {
                countEl.innerText = data.players.online;
            } else {
                countEl.innerText = "0";
            }
        })
        .catch(() => { countEl.innerText = "0"; });
}

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * -20;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
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
