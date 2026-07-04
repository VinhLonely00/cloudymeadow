/* ================================================================
   VANGUARD THEME - CORE ENGINE (CLOUDYMEADOW FIXES)
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // 1. CẬP NHẬT TÊN VÀ TRẠNG THÁI SERVER IP QUẢN LÝ
    const logoText = document.getElementById("nav-logo-text");
    if(logoText) logoText.innerHTML = `${config.serverName.substring(0,6)}<span>${config.serverName.substring(6)}</span>`;
    
    const footerName = document.getElementById("footer-name");
    if(footerName) footerName.textContent = config.serverName;

    // 2. KHỞI CHẠY HIỆU ỨNG HẠT (PARTICLES) GLOBAL NẾU CÓ PHẦN TỬ
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement("div");
            p.className = "particle";
            p.style.left = Math.random() * 100 + "vw";
            p.style.animationDelay = Math.random() * 5 + "s";
            p.style.animationDuration = Math.random() * 3 + 4 + "s";
            particlesContainer.appendChild(p);
        }
    }

    // 3. TỰ ĐỘNG LẤY ONLINE PLAYERS (API MINECRAFT)
    const onlineCount = document.getElementById("online-count");
    if (onlineCount) {
        fetch(`https://api.mcsrvstat.us/2/${config.serverIp}`)
            .then(res => res.json())
            .then(data => {
                if (data.online) {
                    onlineCount.textContent = `${data.players.online} ${config.interface.hero.online}`;
                } else {
                    onlineCount.textContent = `0 ${config.interface.hero.online}`;
                }
            })
            .catch(() => {
                onlineCount.textContent = `Offline`;
            });
    }

    // 4. CHỨC NĂNG SAO CHÉP IP SERVER TẠI TRANG CHỦ
    const btnCopy = document.getElementById("btn-copy");
    if (btnCopy) {
        btnCopy.addEventListener("click", () => {
            navigator.clipboard.writeText(config.serverIp).then(() => {
                const origText = btnCopy.innerHTML;
                btnCopy.innerHTML = `<i class="fas fa-check"></i> ĐÃ COPIED!`;
                btnCopy.style.background = "#2ecc71";
                setTimeout(() => {
                    btnCopy.innerHTML = origText;
                    btnCopy.style.background = "";
                }, 2000);
            });
        });
    }

    // 5. HIỂN THỊ TABS CHÍNH SÁCH (LEGAL SECTIONS)
    const legalContent = document.getElementById("legal-content");
    const legalTabs = document.querySelectorAll(".legal-tab");
    if (legalContent && legalTabs.length > 0) {
        legalTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                legalTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                const target = tab.getAttribute("data-tab");
                legalContent.innerHTML = config.content.legal[target];
            });
        });
        // Thiết lập mặc định tab đầu tiên
        legalContent.innerHTML = config.content.legal.tos;
    }

    // 6. ĐÓNG MỞ NỘI DUNG FAQ / CÁCH CHƠI ACCORDION
    const faqItems = document.querySelectorAll(".faq-item");
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const q = item.querySelector(".faq-question");
            q.addEventListener("click", () => {
                const isOpen = item.classList.contains("active");
                faqItems.forEach(i => i.classList.remove("active"));
                if (!isOpen) item.classList.add("active");
            });
        });
    }
});
