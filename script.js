/* ================================================================
   CLOUDYMEADOW - SCRIPT ENGINE
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
    initApp();
});

// 1. KỞI TẠO ỨNG DỤNG & XỬ LÝ ĐĂNG NHẬP / DISCORD AUTH
function initApp() {
    checkDiscordAuth();
    setupParticles();
    setupWidget();
    fetchPlayerCount();
    setInterval(fetchPlayerCount, 30000); // Cập nhật số người chơi mỗi 30 giây
}

function checkDiscordAuth() {
    // Kiểm tra thông tin đã lưu trong LocalStorage
    const savedUser = localStorage.getItem("cm_discord_user");
    const savedPlayerInfo = localStorage.getItem("cm_player_info");

    // Lấy Token từ URL Fragment nếu vừa Redirect từ Discord OAuth2
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
        // Vừa đăng nhập từ Discord về
        window.history.replaceState({}, document.title, window.location.pathname);
        fetchDiscordUser(accessToken);
        return;
    }

    if (savedUser) {
        const userData = JSON.parse(savedUser);
        if (savedPlayerInfo) {
            // Đã hoàn tất thông tin -> Cho vào trang chính
            showMainContent(userData, JSON.parse(savedPlayerInfo));
        } else {
            // Chưa điền Form thông tin người chơi
            showPlayerInfoModal(userData);
        }
    } else {
        // Chưa đăng nhập Discord -> Hiện màn hình khóa
        document.getElementById("login-overlay").style.display = "flex";
        document.getElementById("info-modal").style.display = "none";
        document.getElementById("main-content").style.display = "none";
    }
}

// Chuyển hướng đến Discord OAuth2
function loginWithDiscord() {
    const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
    const scope = encodeURIComponent("identify");
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${config.discordAuth.clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    window.location.href = authUrl;
}

// Lấy thông tin tài khoản Discord qua API Token
function fetchDiscordUser(token) {
    fetch("https://discord.com/api/users/@me", {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
        if (data.id) {
            localStorage.setItem("cm_discord_user", JSON.stringify(data));
            const savedPlayerInfo = localStorage.getItem("cm_player_info");
            if (savedPlayerInfo) {
                showMainContent(data, JSON.parse(savedPlayerInfo));
            } else {
                showPlayerInfoModal(data);
            }
        } else {
            alert("Đăng nhập Discord thất bại. Vui lòng thử lại!");
            logoutDiscord();
        }
    })
    .catch(err => {
        console.error("Lỗi Auth Discord:", err);
        alert("Lỗi kết nối tới Discord!");
    });
}

// Hiển thị Modal bắt buộc nhập thông tin người chơi
function showPlayerInfoModal(userData) {
    document.getElementById("login-overlay").style.display = "none";
    document.getElementById("main-content").style.display = "none";
    document.getElementById("info-modal").style.display = "flex";
}

// Xử lý gửi Form Thông Tin Người Chơi & Báo về Discord Webhook
function submitPlayerInfo(e) {
    e.preventDefault();
    const ign = document.getElementById("ign-input").value.trim();
    const gender = document.getElementById("gender-select").value;
    const specialty = document.getElementById("specialty-select").value;

    if (!ign || !gender || !specialty) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    const playerInfo = { ign, gender, specialty };
    localStorage.setItem("cm_player_info", JSON.stringify(playerInfo));

    const userData = JSON.parse(localStorage.getItem("cm_discord_user"));

    // Gửi thông báo đến Discord Webhook
    sendDiscordWebhook(userData, playerInfo);

    // Hiển thị trang web chính
    showMainContent(userData, playerInfo);
}

// Gửi Log truy cập người dùng về Discord Webhook
function sendDiscordWebhook(user, player) {
    if (!config.discordAuth.webhookUrl) return;

    const avatarUrl = user.avatar 
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` 
        : "https://cdn.discordapp.com/embed/avatars/0.png";

    const payload = {
        embeds: [{
            title: "🔔 THÔNG TIN NGƯỜI DÙNG MỚI ĐĂNG NHẬP",
            color: 0xf1c40f,
            thumbnail: { url: avatarUrl },
            fields: [
                { name: "👤 Discord User", value: `${user.username} (ID: ${user.id})`, inline: true },
                { name: "🎮 Tên Ingame (IGN)", value: player.ign, inline: true },
                { name: "🚻 Giới Tính", value: player.gender, inline: true },
                { name: "⚔️ Chuyên Môn", value: player.specialty, inline: true }
            ],
            footer: { text: "CloudyMeadow Access System" },
            timestamp: new Date().toISOString()
        }]
    };

    fetch(config.discordAuth.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).catch(err => console.error("Không thể gửi Webhook:", err));
}

// Hiển thị giao diện chính & Render dữ liệu từ config.js
function showMainContent(user, player) {
    document.getElementById("login-overlay").style.display = "none";
    document.getElementById("info-modal").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    // 1. Cập nhật thông tin User trên Header
    const avatarUrl = user.avatar 
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` 
        : "https://cdn.discordapp.com/embed/avatars/0.png";
    
    document.getElementById("hero-user-avatar").src = avatarUrl;
    document.getElementById("hero-user-name").innerText = user.global_name || user.username;
    document.getElementById("hero-user-ign").innerText = player.ign;
    document.getElementById("hero-user-details").innerText = `${player.gender} • ${player.specialty}`;

    // 2. Render dữ liệu từ config.js
    renderContent();
}

function logoutDiscord() {
    localStorage.removeItem("cm_discord_user");
    localStorage.removeItem("cm_player_info");
    location.reload();
}

// Dropdown User Profile Menu
function toggleUserDropdown(event) {
    event.stopPropagation();
    const menu = document.getElementById("profile-dropdown-menu");
    const arrow = document.getElementById("dropdown-arrow");
    const isVisible = menu.style.display === "flex";

    menu.style.display = isVisible ? "none" : "flex";
    if (arrow) arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
}

document.addEventListener("click", function (e) {
    const btn = document.getElementById("profile-dropdown-btn");
    const menu = document.getElementById("profile-dropdown-menu");
    const arrow = document.getElementById("dropdown-arrow");

    if (btn && menu && !btn.contains(e.target)) {
        menu.style.display = "none";
        if (arrow) arrow.style.transform = "rotate(0deg)";
    }
});


// 2. RENDER DỮ LIỆU TỪ CONFIG.JS
function renderContent() {
    // Brand & Logo
    document.getElementById("ip-display").innerText = config.serverIp;
    document.getElementById("footer-name").innerText = config.serverName;

    // Interface Nav / Titles
    if (config.interface) {
        if (config.interface.nav) {
            if (document.getElementById("nav-home")) document.getElementById("nav-home").innerText = config.interface.nav.home;
            if (document.getElementById("nav-staff")) document.getElementById("nav-staff").innerText = config.interface.nav.staff;
            if (document.getElementById("nav-rules")) document.getElementById("nav-rules").innerText = config.interface.nav.rules;
            if (document.getElementById("nav-faq")) document.getElementById("nav-faq").innerText = config.interface.nav.faq;
            if (document.getElementById("nav-fish")) document.getElementById("nav-fish").innerText = config.interface.nav.fish;
            if (document.getElementById("nav-enchant")) document.getElementById("nav-enchant").innerText = config.interface.nav.enchant;
        }

        if (config.interface.titles) {
            if (document.getElementById("title-staff")) document.getElementById("title-staff").innerText = config.interface.titles.staff;
            if (document.getElementById("title-rules")) document.getElementById("title-rules").innerText = config.interface.titles.rules;
            if (document.getElementById("title-faq")) document.getElementById("title-faq").innerText = config.interface.titles.faq;
            if (document.getElementById("title-legal")) document.getElementById("title-legal").innerText = config.interface.titles.legal;
        }

        if (config.interface.hero) {
            if (document.getElementById("hero-btn-copy")) document.getElementById("hero-btn-copy").innerText = config.interface.hero.btn_copy;
            if (document.getElementById("hero-online")) document.getElementById("hero-online").innerText = config.interface.hero.online;
        }

        if (config.interface.legal_tabs) {
            if (document.getElementById("tab-tos")) document.getElementById("tab-tos").innerText = config.interface.legal_tabs.tos;
            if (document.getElementById("tab-notice")) document.getElementById("tab-notice").innerText = config.interface.legal_tabs.notice;
            if (document.getElementById("tab-priv")) document.getElementById("tab-priv").innerText = config.interface.legal_tabs.priv;
        }
    }

    // Social Links
    const socialContainer = document.getElementById("social-container");
    if (socialContainer && config.social) {
        socialContainer.innerHTML = "";
        const icons = {
            discord: "fab fa-discord",
            tiktok: "fab fa-tiktok",
            youtube: "fab fa-youtube",
            twitter: "fab fa-twitter",
            instagram: "fab fa-instagram",
            store: "fas fa-shopping-cart"
        };

        for (const [key, url] of Object.entries(config.social)) {
            if (url) {
                const a = document.createElement("a");
                a.href = url;
                a.target = "_blank";
                a.className = "social-icon";
                a.innerHTML = `<i class="${icons[key] || 'fas fa-link'}"></i>`;
                socialContainer.appendChild(a);
            }
        }
    }

    // Staff Section
    const staffContainer = document.getElementById("staff-container");
    if (staffContainer && config.content.staff) {
        staffContainer.innerHTML = config.content.staff.map(member => {
            const skinName = member.skinName || member.name;
            return `
                <div class="card">
                    <img src="https://mc-heads.net/avatar/${skinName}/100" alt="${member.name}" class="staff-avatar" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/100'">
                    <h3 class="staff-name">${member.name}</h3>
                    <span class="role-badge role-${member.role.toLowerCase()}">${member.role}</span>
                    <p class="staff-bio">${member.bio}</p>
                </div>
            `;
        }).join("");
    }

    // Rules Section
    const rulesContainer = document.getElementById("rules-container");
    if (rulesContainer && config.content.rules) {
        rulesContainer.innerHTML = config.content.rules.map(rule => `
            <div class="card rule-card">
                <h3>${rule.title}</h3>
                <p>${rule.desc}</p>
            </div>
        `).join("");
    }

    // FAQ Section
    const faqContainer = document.getElementById("faq-container");
    if (faqContainer && config.content.faq) {
        faqContainer.innerHTML = config.content.faq.map(item => `
            <div class="faq-item">
                <div class="faq-question">
                    <h3>${item.q}</h3>
                </div>
                <div class="faq-answer">
                    <p>${item.a}</p>
                </div>
            </div>
        `).join("");
    }

    // Legal Section
    if (config.content.legal) {
        if (document.getElementById("legal-tos")) document.getElementById("legal-tos").innerHTML = config.content.legal.tos;
        if (document.getElementById("legal-notice")) document.getElementById("legal-notice").innerHTML = config.content.legal.notice;
        if (document.getElementById("legal-priv")) document.getElementById("legal-priv").innerHTML = config.content.legal.priv;
    }
}


// 3. XỬ LÝ LẤY SỐ NGƯỜI CHƠI BẰNG MINETOOLS API
function fetchPlayerCount() {
    const playerCountEl = document.getElementById("player-count");
    if (!playerCountEl) return;

    fetch(`https://api.minetools.eu/ping/${config.serverIp}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.players) {
                playerCountEl.innerText = data.players.online;
            } else {
                playerCountEl.innerText = "0";
            }
        })
        .catch(() => {
            playerCountEl.innerText = "0";
        });
}


// 4. CHỨC NĂNG CHỌN NỀN TẢNG (PC/PE) VÀ SAO CHÉP IP
function copyIp() {
    document.getElementById("ip-select-modal").style.display = "flex";
    document.getElementById("copy-status-msg").style.display = "none";
}

function closeIpModal() {
    document.getElementById("ip-select-modal").style.display = "none";
}

function copyPlatformIp(platform) {
    let ipToCopy = config.serverIpPC;
    if (platform === 'pe') {
        ipToCopy = config.serverIpPE;
    }

    navigator.clipboard.writeText(ipToCopy).then(() => {
        const msgEl = document.getElementById("copy-status-msg");
        msgEl.innerText = `✓ Đã sao chép IP (${platform.toUpperCase()}): ${ipToCopy}`;
        msgEl.style.display = "block";

        setTimeout(() => {
            closeIpModal();
        }, 1800);
    }).catch(err => {
        alert("Không thể tự động sao chép. IP của bạn: " + ipToCopy);
    });
}


// 5. CHUYỂN ĐỔI TAB CHÍNH SÁCH (LEGAL TABS)
function openLegal(tabName) {
    const tabs = document.querySelectorAll(".l-tab");
    const contents = document.querySelectorAll(".l-content");

    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    const selectedTab = document.getElementById(`tab-${tabName}`);
    const selectedContent = document.getElementById(`legal-${tabName}`);

    if (selectedTab) selectedTab.classList.add("active");
    if (selectedContent) selectedContent.classList.add("active");
}


// 6. FLOATING SUPPORT WIDGET TOGGLE
function setupWidget() {
    const toggleBtn = document.getElementById("cm-widget-toggle");
    const menu = document.getElementById("cm-widget-menu");
    const container = document.getElementById("cm-widget-container");

    if (toggleBtn && menu && container) {
        container.classList.remove("cm-widget-hidden");

        toggleBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("cm-widget-menu-closed");
        });

        document.addEventListener("click", function (e) {
            if (!container.contains(e.target)) {
                menu.classList.add("cm-widget-menu-closed");
            }
        });
    }
}


// 7. HIỆU ỨNG HẠT PARTICLE NỀN (BACKGROUND)
function setupParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(241, 196, 15, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${posY}%;
            left: ${posX}%;
            animation: floatParticle ${duration}s infinite ease-in-out ${delay}s;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
    }
}
