/* ================================================================
   VANGUARD THEME - ENGINE v8.0 (CLOUDYMEADOW OPTIMIZED - MULTI-PAGE)
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initSocials();
    applyTexts();
    fetchStatus();
    checkDiscordAuth(); // Kích hoạt kiểm tra trạng thái Discord ngay khi vào trang
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

    // Render danh sách FAQ (Đã chuyển đổi sang thẻ div để hỗ trợ nhúng iframe/mã HTML phức tạp)
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

// --- HÀM SAO CHÉP IP GỐC (Nâng cấp quản lý Class Trạng Thái Mới) ---
function copyIp() {
    const wrapper = document.getElementById('auth-success-box');
    const actionText = document.getElementById('hero-btn-copy');
    const currentIp = document.getElementById('ip-display')?.innerText || config.serverIp;
    
    if (!wrapper || !actionText) return;
    
    navigator.clipboard.writeText(currentIp).then(() => {
        wrapper.classList.add('copied');
        actionText.innerText = "ĐÃ COPIED!";
        setTimeout(() => {
            wrapper.classList.remove('copied');
            actionText.innerText = config.interface?.hero?.btn_copy || "SAO CHÉP";
        }, 2000);
    });
}

// --- LOGIC MỞ KHOÁ IP BẰNG LINK MỜI DISCORD (ĐƠN GIẢN & LƯU MÃI MÃI) ---
function loginWithDiscord() {
    // 1. Mở link mời Discord lấy trực tiếp từ config hệ thống ở tab mới
    if (config.social && config.social.discord) {
        window.open(config.social.discord, '_blank');
    } else {
        console.error("Chưa cấu hình link Discord tại mục config.social.discord");
        return;
    }

    // 2. Lưu trạng thái "đã bấm" vào bộ nhớ trình duyệt để không bắt bấm lại nữa
    localStorage.setItem("cm_verified_ip", config.serverIp);

    // 3. Chuyển đổi giao diện sang trạng thái thành công ngay lập tức để lấy IP
    switchInterfaceToSuccess(config.serverIp);
}

function checkDiscordAuth() {
    // Kiểm tra xem trình duyệt của người chơi đã có dữ liệu lưu trữ chưa
    const savedIp = localStorage.getItem("cm_verified_ip");
    
    if (savedIp) {
        // Nếu có: Tự động mở khoá và hiển thị IP ngay từ đầu, bỏ qua bước đăng nhập
        switchInterfaceToSuccess(savedIp);
    } else {
        // Nếu chưa: Đảm bảo hiển thị form bắt bấm nút tham gia Discord ban đầu
        const loginBox = document.getElementById("auth-login-box");
        const successBox = document.getElementById("auth-success-box");
        const loadingBox = document.getElementById("auth-loading-box");
        
        if (loginBox) loginBox.style.display = "flex";
        if (loadingBox) loadingBox.style.display = "none";
        if (successBox) successBox.style.display = "none";
    }
}

// Hàm phụ trợ quản lý hiển thị các box giao diện
function switchInterfaceToSuccess(ipToShow) {
    const loginBox = document.getElementById("auth-login-box");
    const loadingBox = document.getElementById("auth-loading-box");
    const successBox = document.getElementById("auth-success-box");

    if (loginBox) loginBox.style.display = "none";
    if (loadingBox) loadingBox.style.display = "none";
    if (successBox) {
        successBox.style.display = "flex";
        const ipDisp = document.getElementById("ip-display");
        if (ipDisp) ipDisp.innerText = ipToShow;
    }
}

// --- CÁC HÀM TIỆN ÍCH CORE CỦA THEME (Định nghĩa bổ sung để tránh lỗi sập Engine) ---
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
    if(!config.social) return;
    const bindLink = (id, url) => {
        const el = document.getElementById(id);
        if(el) {
            if(url) { el.href = url; el.style.display = ""; }
            else { el.style.display = "none"; }
        }
    };
    bindLink('social-discord', config.social.discord);
    bindLink('social-tiktok', config.social.tiktok);
    bindLink('social-youtube', config.social.youtube);
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
    // Giữ trống hoặc tích hợp thư viện hạt tùy thích, hàm này được gọi ở DOMContentLoaded
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
