/* ================================================================
   VANGUARD THEME - CONFIGURATION (CLOUDYMEADOW VERSION)
   ================================================================ */

const config = {
    // 1. INFO SERVIDOR
    serverName: "CloudyMeadow",
    serverIp: "cloudymeadow.sytes.net",
    serverLogo: "logo.png", // Đảm bảo file logo.png nằm cùng thư mục

    // 2. REDES SOCIALES
    social: {
        discord: "https://discord.gg/2uzK8EryBG",
        store: "", 
        twitter: "",
        instagram: "",
        tiktok: "https://www.tiktok.com/@cloudy.meadow_mc",
        youtube: "https://www.youtube.com/@servermc_00"
    },

    // 3. THÔNG TIN SERVER (Chuyển đổi từ mục voteLinks cũ sang hiển thị thông tin)
    voteLinks: [
        { name: "IP Máy Chủ: cloudymeadow.sytes.net", url: "#" },
        { name: "Phiên Bản: 1.16 - 1.21+", url: "#" },
        { name: "Cửa Hàng: Nhắn Admin vynduskwinter", url: "https://discord.gg/2uzK8EryBG" },
        { name: "Cộng Đồng Discord chính thức", url: "https://discord.gg/2uzK8EryBG" },
        { name: "Kênh TikTok: @cloudy.meadow_mc", url: "https://www.tiktok.com/@cloudy.meadow_mc" },
        { name: "Kênh YouTube: @servermc_00", url: "https://www.youtube.com/@servermc_00" }
    ],

    // 4. CONTENIDO (Việt Nam)
    content: {
        // --- STAFF ---
        staff: [
            { 
                name: "VinhLonely00", role: "OWNER", 
                bio_es: "Quản lý & Phát triển toàn bộ hệ thống server.",
                bio_en: "Quản lý & Phát triển toàn bộ hệ thống server."
            },
            { 
                name: "BadNether", role: "ADMIN", 
                bio_es: "Phụ trách mảng Duel & Phát triển tính năng game.",
                bio_en: "Phụ trách mảng Duel & Phát triển tính năng game."
            },
            { 
                name: "Hellaoo", role: "HELPER", 
                bio_es: "Hỗ trợ người chơi, giải đáp thắc mắc & Săn lùng bug game.",
                bio_en: "Hỗ trợ người chơi, giải đáp thắc mắc & Săn lùng bug game."
            }
        ],

        // --- REGLAS (Luật Server) ---
        rules: [
            { 
                title_es: "1. Tôn Trọng Lẫn Nhau", desc_es: "Không văng tục, xúc phạm, phân biệt chủng tộc hoặc toxic với người chơi khác và Staff.",
                title_en: "1. Tôn Trọng Lẫn Nhau", desc_en: "Không văng tục, xúc phạm, phân biệt chủng tộc hoặc toxic với người chơi khác và Staff."
            },
            { 
                title_es: "2. Không Hack / Cheats", desc_es: "Nghiêm cấm dùng client hack (Xray, Fly, KillAura...). Vi phạm là ăn BAN vĩnh viễn không giải thích.",
                title_en: "2. Không Hack / Cheats", desc_en: "Nghiêm cấm dùng client hack (Xray, Fly, KillAura...). Vi phạm là ăn BAN vĩnh viễn không giải thích."
            },
            { 
                title_es: "3. Không Spam / Quảng Cáo", desc_es: "Vui lòng không spam chat, viết hoa vô tội vạ hoặc chèo kéo quảng cáo server khác.",
                title_en: "3. Không Spam / Quảng Cáo", desc_en: "Vui lòng không spam chat, viết hoa vô tội vạ hoặc chèo kéo quảng cáo server khác."
            },
            { 
                title_es: "4. Bảo Mật Tài Khoản", desc_es: "Tự bảo quản mật khẩu của mình. Staff không bao giờ đòi hỏi mật khẩu của bạn.",
                title_en: "4. Bảo Mật Tài Khoản", desc_en: "Tự bảo quản mật khẩu của mình. Staff không bao giờ đòi hỏi mật khẩu của bạn."
            },
            { 
                title_es: "5. Nghiêm Cấm Lạm Dụng Bug", desc_es: "Gặp lỗi game thì báo Helper Hellaoo nhận thưởng, cố tình lạm dụng trục lợi là ăn phạt nặng.",
                title_en: "5. Nghiêm Cấm Lạm Dụng Bug", desc_en: "Gặp lỗi game thì báo Helper Hellaoo nhận thưởng, cố tình lạm dụng trục lợi là ăn phạt nặng."
            },
            { 
                title_es: "6. Không Phá Hoại (Grief)", desc_es: "Không được đập phá công trình của người khác trong vùng đất đã được claim bảo vệ.",
                title_en: "6. Không Phá Hoại (Grief)", desc_en: "Không được đập phá công trình của người khác trong vùng đất đã được claim bảo vệ."
            },
            { 
                title_es: "7. Skin & Tên Hợp Lệ", desc_es: "Không đặt tên nhân vật hoặc sử dụng skin có nội dung phản cảm, đồi trụy hoặc chính trị.",
                title_en: "7. Skin & Tên Hợp Lệ", desc_en: "Không đặt tên nhân vật hoặc sử dụng skin có nội dung phản cảm, đồi trụy hoặc chính trị."
            },
            { 
                title_es: "8. Quyết Định Của Staff", desc_es: "Quyết định cuối cùng thuộc về BQT. Cãi cùn hay gây sự công khai sẽ nhận vé phạt bonus.",
                title_en: "8. Quyết Định Của Staff", desc_en: "Quyết định cuối cùng thuộc về BQT. Cãi cùn hay gây sự công khai sẽ nhận vé phạt bonus."
            }
        ],

        // --- ĐÃ XÓA FAQ TRỐNG ĐỂ TRÁNH LỖI GIAO DIỆN ---
        faq: [],

        // --- VĂN BẢN PHÁP LÝ ---
        legal: {
            tos_es: `
                <h3>Luật Chơi Và Sống Sót</h3>
                <p>Vào đây chơi là một đặc ân, không phải nghĩa vụ. Hãy chơi game văn minh, đừng để cụ tổ gánh còng lưng vì hành vi độc hại nhé.</p>
                <br>
                <h3>Mất Nick Ráng Chịu</h3>
                <p>Đặt mật khẩu kiểu '123456' hay 'choemxin' rồi bị thằng bạn thân vào phá nhà thì tự ôm gối khóc chứ Admin không đòi lại được đâu à nha.</p>
                <br>
                <h3>Nạp Tiền Là Tự Nguyện</h3>
                <p>Tiền nạp vào để nuôi server nuôi Admin ăn mì tôm qua ngày. Đã giao dịch xong là <b>miễn trả lại dưới mọi hình thức</b>. Cố tình hoàn tiền (refund) là ăn BAN bay màu vĩnh viễn.</p>
            `,
            tos_en: `
                <h3>Luật Chơi Và Sống Sót</h3>
                <p>Vào đây chơi là một đặc ân, không phải nghĩa vụ. Hãy chơi game văn minh, đừng để cụ tổ gánh còng lưng vì hành vi độc hại nhé.</p>
                <br>
                <h3>Mất Nick Ráng Chịu</h3>
                <p>Đặt mật khẩu kiểu '123456' hay 'choemxin' rồi bị thằng bạn thân vào phá nhà thì tự ôm gối khóc chứ Admin không đòi lại được đâu à nha.</p>
                <br>
                <h3>Nạp Tiền Là Tự Nguyện</h3>
                <p>Tiền nạp vào để nuôi server nuôi Admin ăn mì tôm qua ngày. Đã giao dịch xong là <b>miễn trả lại dưới mọi hình thức</b>. Cố tình hoàn tiền (refund) là ăn BAN bay màu vĩnh viễn.</p>
            `,

            notice_es: `
                <h3>Thông Tin 'Tổng Cục' CloudyMeadow</h3>
                <ul>
                    <li><b>Tên Pháp Lý:</b> Tổ chức giải trí tối cao CloudyMeadow.</li>
                    <li><b>Địa Chỉ:</b> Đồng cỏ mây ngẫu nhiên, thế giới Minecraft Java.</li>
                    <li><b>Liên Hệ:</b> Gõ đầu Admin vynduskwinter trên Discord.</li>
                </ul>
                <br>
                <h3>Bản Quyền</h3>
                <p>Server làm ra vì đam mê, hoàn toàn không liên quan hay được chống lưng bởi Mojang hay Microsoft. Thấy hay thì chơi, thấy dở thì góp ý chứ đừng kiện tụng nha mấy pháp sư.</p>
            `,
            notice_en: `
                <h3>Thông Tin 'Tổng Cục' CloudyMeadow</h3>
                <ul>
                    <li><b>Tên Pháp Lý:</b> Tổ chức giải trí tối cao CloudyMeadow.</li>
                    <li><b>Địa Chỉ:</b> Đồng cỏ mây ngẫu nhiên, thế giới Minecraft Java.</li>
                    <li><b>Liên Hệ:</b> Gõ đầu Admin vynduskwinter trên Discord.</li>
                </ul>
                <br>
                <h3>Bản Quyền</h3>
                <p>Server làm ra vì đam mê, hoàn toàn không liên quan hay được chống lưng bởi Mojang hay Microsoft. Thấy hay thì chơi, thấy dở thì góp ý chứ đừng kiện tụng nha mấy pháp sư.</p>
            `,

            priv_es: `
                <h3>Dữ Liệu Bị Săn Lùng</h3>
                <p>Để chống phá hoại, tụi mình sẽ tự động lưu lại: Địa chỉ IP, Tên nhân vật, Nhật ký chat (để bắt quả tang nếu chửi bậy) và Lịch sử giao dịch mua đồ.</p>
                <br>
                <h3>Thời Gian Lưu Trữ</h3>
                <p>Dữ liệu được giữ kín cho đến khi server sập (hoặc Admin quên gia hạn hosting). Cam kết không bán dữ liệu cho bên thứ ba để quảng cáo sim số hay bảo hiểm đâu yên tâm!</p>
            `,
            priv_en: `
                <h3>Dữ Liệu Bị Săn Lùng</h3>
                <p>Để chống phá hoại, tụi mình sẽ tự động lưu lại: Địa chỉ IP, Tên nhân vật, Nhật ký chat (để bắt quả tang nếu chửi bậy) và Lịch sử giao dịch mua đồ.</p>
                <br>
                <h3>Thời Gian Lưu Trữ</h3>
                <p>Dữ liệu được giữ kín cho đến khi server sập (hoặc Admin quên gia hạn hosting). Cam kết không bán dữ liệu cho bên thứ ba để quảng cáo sim số hay bảo hiểm đâu yên tâm!</p>
            `
        }
    },

    // 5. INTERFAZ (Giao diện hiển thị tiếng Việt)
    interface: {
        es: {
            flag: "vn", name: "Tiếng Việt",
            nav: { home: "Trang Chủ", staff: "Đội Ngũ", rules: "Luật", vote: "Thông Tin" },
            hero: { subtitle: "Đồng Cỏ Mây - Trải nghiệm sinh tồn đỉnh cao", btn_copy: "SAO CHÉP IP", online: "đang chơi" },
            titles: { staff: "BAN QUẢN TRỊ", rules: "LUẬT SERVER", vote: "THÔNG TIN SERVER", legal: "CHÍNH SÁCH" },
            legal_tabs: { tos: "Điều Khoản", priv: "Bảo Mật", notice: "Bản Quyền" }
        },
        en: {
            flag: "vn", name: "Tiếng Việt",
            nav: { home: "Trang Chủ", staff: "Đội Ngũ", rules: "Luật", vote: "Thông Tin" },
            hero: { subtitle: "Đồng Cỏ Mây - Trải nghiệm sinh tồn đỉnh cao", btn_copy: "SAO CHÉP IP", online: "đang chơi" },
            titles: { staff: "BAN QUẢN TRỊ", rules: "LUẬT SERVER", vote: "THÔNG TIN SERVER", legal: "CHÍNH SÁCH" },
            legal_tabs: { tos: "Điều Khoản", priv: "Bảo Mật", notice: "Bản Quyền" }
        }
    }
};
