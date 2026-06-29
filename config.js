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

    // 3. ĐÃ BỎ TRANG VOTE LINK (Xóa trắng danh sách)
    voteLinks: [],

    // 4. CONTENIDO (Việt Nam)
    content: {
        // --- STAFF ---
        staff: [
            { 
                name: "VinhLonely00", role: "OWNER", 
                bio: "Quản lý & Phát triển toàn bộ hệ thống server."
            },
            { 
                name: "BadNether", role: "ADMIN", 
                bio: "Phụ trách mảng Duel & Phát triển tính năng game."
            },
            { 
                name: "Hellaoo", role: "HELPER", 
                bio: "Hỗ trợ người chơi, giải đáp thắc mắc & Săn lùng bug game."
            }
        ],

        // --- REGLAS (Luật Server) ---
        rules: [
            { 
                title: "1. Tôn Trọng Lẫn Nhau", desc: "Không văng tục, xúc phạm, phân biệt chủng tộc hoặc toxic với người chơi khác và Staff."
            },
            { 
                title: "2. Không Hack / Cheats", desc: "Nghiêm cấm dùng client hack (Xray, Fly, KillAura...). Vi phạm là ăn BAN vĩnh viễn không giải thích."
            },
            { 
                title: "3. Không Spam / Quảng Cáo", desc: "Vui lòng không spam chat, viết hoa vô tội vạ hoặc chèo kéo quảng cáo server khác."
            },
            { 
                title: "4. Bảo Mật Tài Khoản", desc: "Tự bảo quản mật khẩu của mình. Staff không bao giờ đòi hỏi mật khẩu của bạn."
            },
            { 
                title: "5. Nghiêm Cấm Lạm Dụng Bug", desc: "Gặp lỗi game thì báo Helper Hellaoo nhận thưởng, cố tình lạm dụng trục lợi là ăn phạt nặng."
            },
            { 
                title: "6. Không Phá Hoại (Grief)", desc: "Không được đập phá công trình của người khác trong vùng đất đã được claim bảo vệ."
            },
            { 
                title: "7. Skin & Tên Hợp Lệ", desc: "Không đặt tên nhân vật hoặc sử dụng skin có nội dung phản cảm, đồi trụy hoặc chính trị."
            },
            { 
                title: "8. Quyết Định Của Staff", desc: "Quyết định cuối cùng thuộc về BQT. Cãi cùn hay gây sự công khai sẽ nhận vé phạt bonus."
            }
        ],

        // --- HỒI SINH FAQ THÀNH LỆNH SERVER & CÁCH CHƠI ---
        faq: [
            // --- HƯỚNG DẪN QUAN TRỌNG CHO NGƯỜI MỚI ---
            { 
                q: "📌 Cách Đăng Ký / Đăng Nhập (Register/Login)", 
                a: "• Mới vào server lần đầu, bạn cần gõ lệnh: <code>/register [mật_khẩu] [mật_khẩu]</code> để đăng ký tài khoản.<br>• Ở những lần chơi sau, hệ thống hỏi thì gõ: <code>/login [mật_khẩu]</code>."
            },
            { 
                q: "🛡️ Cách Bảo Vệ Đất (Claim Land)", 
                a: "Sử dụng một chiếc <b>Xẻng Vàng</b>:<br>1. Click chuột phải vào 1 block ở góc đất cần bảo vệ.<br>2. Đi chéo đến góc đối diện bên kia, tiếp tục click chuột phải vào block đó để hoàn thành.<br>• Xem thêm các lệnh bổ trợ claim ở các mục bên dưới."
            },
            { 
                q: "⚔️ Hướng Dẫn Thách Đấu (Duel PvP)", 
                a: "• Gõ lệnh <code>/duelhelp</code> để nhận ngay cuốn sách hướng dẫn chi tiết.<br>• Hệ thống hỗ trợ đa dạng thể thức: Đấu giao hữu hoặc cá cược ăn Tiền, đấu 1v1, 2v2 hoặc thậm chí cân team lệch (1v5).<br>• Đa dạng với hơn 15+ bộ Kits khác nhau."
            },
            { 
                q: "🔮 Hệ Thống Custom Enchant", 
                a: "• Server sở hữu hơn 60+ bùa chú (Enchant) được custom độc lạ, thú vị và cân bằng, không sợ bị quá OP.<br>• Cách lấy duy nhất là sử dụng lệnh <code>/phuphep</code> để random bằng tiền server, hoặc săn các bùa độc quyền thông qua các sự kiện (Event) do BQT tổ chức."
            },

            // --- CHI TIẾT TỪNG CÂU LỆNH ---
            { 
                q: "💬 Lệnh /help", 
                a: "Nhận sách hướng dẫn cơ bản và tổng quan của server ngay trong game."
            },
            { 
                q: "🎛️ Lệnh /menu", 
                a: "Mở bảng giao diện quản lý nhanh, tích hợp phím tắt cho gần như tất cả các lệnh trong server."
            },
            { 
                q: "👥 Lệnh /tpa [tên_người_chơi]", 
                a: "Gửi yêu cầu dịch chuyển nhanh (teleport) đến vị trí của bạn bè hoặc người chơi khác."
            },
            { 
                q: "✨ Lệnh /phuphep", 
                a: "Mở tính năng nâng cấp, quay ngẫu nhiên các Custom Enchant độc quyền bằng tiền server."
            },
            { 
                q: "⚖️ Lệnh /buonban", 
                a: "Truy cập trung tâm giao dịch, chợ thương mại giữa các người chơi để mua bán vật phẩm."
            },
            { 
                q: "🎯 Lệnh /quest", 
                a: "Hệ thống nhiệm vụ hằng ngày/thử thách giúp bạn cày cuốc và kiếm thêm thu nhập."
            },
            { 
                q: "🛡️ Lệnh /team", 
                a: "Lệnh dùng để khởi tạo, quản lý, mời thành viên hoặc thiết lập tổ đội/bang hội của bạn."
            },
            { 
                q: "🎮 Lệnh /game", 
                a: "Trung tâm giải trí tổng hợp của server, nơi bạn truy cập nhanh các minigame, duel hoặc các khu vực kiếm tiền."
            },
            { 
                q: "🗺️ Nhóm lệnh /claim", 
                a: "• <code>/claim</code>: Mở giao diện (GUI) quản lý khu đất đã bảo vệ.<br>• <code>/trust [tên]</code>: Cho phép bạn bè cùng xây dựng chung trong đất của bạn.<br>• <code>/untrust [tên]</code>: Thu hồi lại quyền xây dựng của người đó.<br>• <code>/abandonclaim</code>: Xóa bỏ hoàn toàn khu đất đang claim hiện tại."
            },
            { 
                q: "⚙️ Lệnh /setting", 
                a: "Cài đặt giao diện cá nhân, tùy chỉnh bật/tắt các chức năng hiển thị để thể hiện cá tính riêng."
            },
            { 
                q: "🎲 Lệnh /taixiu", 
                a: "Minigame giải trí may rủi bằng tiền trong server. Một bước ra đê, hai bước lên nhà lầu!"
            },
            { 
                q: "🎁 Lệnh /daily", 
                a: "Nơi điểm danh để nhận các phần quà miễn phí định kỳ theo Ngày, theo Tuần và theo Tháng."
            },
            { 
                q: "🏆 Lệnh /bxh", 
                a: "Mở bảng xếp hạng vinh danh những người chơi xuất sắc và giàu có nhất tại CloudyMeadow."
            },
            { 
                q: "🏠 Lệnh /sethome và /home [tên]", 
                a: "• <code>/sethome [tên]</code>: Đánh dấu vị trí căn nhà của bạn.<br>• <code>/home [tên]</code>: Dịch chuyển tức thời về lại ngôi nhà đã đặt."
            },
            { 
                q: "🎭 Các lệnh hành động vui vẻ (/spin, /crawl, /lay, /sit)", 
                a: "Sử dụng để thực hiện các biểu cảm cơ thể hài hước: <code>/spin</code> (xoay người), <code>/crawl</code> (bò), <code>/lay</code> (nằm), và <code>/sit</code> (ngồi) cùng bạn bè."
            },

            // --- CÁC CHỨC NĂNG NỔI BẬT KHÁC ---
            { 
                q: "🎮 Các MiniGames giải trí & Kiếm Tiền/Point", 
                a: "• <b>Parkour:</b> Thử thách vượt chướng ngại vật nhận Point.<br>• <b>ChatGame:</b> Nhanh tay lẹ mắt cào phím nhận Point.<br>• <b>TntTag:</b> Trò chơi ôm bom tử thần nhận cả Tiền và Point.<br>• <b>Câu Cá:</b> Hoạt động thư giãn đổi lấy Tiền.<br>• <b>Duel:</b> So trình PvP kiếm Tiền hoặc vui vẻ.<br>• <b>TaiXiu:</b> Thử thách nhân phẩm kiếm Tiền."
            },
            { 
                q: "📦 Lồng Spawner Tiện Ích", 
                a: "Hệ thống lồng quái thông minh được tối ưu hóa: <b>Không sinh quái ra ngoài</b> gây lag server. Thay vào đó, bạn có thể tương tác trực tiếp với menu GUI của lồng để tự động Bán hoặc Nhận Items vô cùng tiện lợi."
            },
            { 
                q: "🚀 Các Tiện Ích Độc Đáo Khác", 
                a: "• <b>Thang Máy Sắt:</b> Chỉ cần đặt các khối sắt song song thẳng đứng để làm thang máy di chuyển siêu tốc giữa các tầng.<br>• <b>VoiceChat:</b> Hệ thống đàm thoại giọng nói trực tiếp cực tiện ích.<br>• <b>Lệnh /vote(...):</b> Người chơi được quyền bầu chọn thay đổi thời gian (Ngày/Đêm) hoặc thời tiết (Mưa/Nắng).<br>• <b>Đa phiên bản:</b> Hỗ trợ chơi mượt mà trên nhiều phiên bản máy tính và tương thích hoàn toàn với hệ máy PE (Điện thoại).<br>• <b>Thế giới & Quái vật:</b> Khám phá thế giới rộng lớn với các công trình đặc biệt. Quái vật tự nhiên được tăng cường sức mạnh để tăng tính thử thách và cân bằng với Player."
            }
        ],

        // --- VĂN BẢN PHÁP LÝ ---
        legal: {
            tos: `
                <h3>Luật Chơi Và Sống Sót</h3>
                <p>Vào đây chơi là một đặc ân, không phải nghĩa vụ. Hãy chơi game văn minh, đừng để cụ tổ gánh còng lưng vì hành vi độc hại nhé.</p>
                <br>
                <h3>Mất Nick Ráng Chịu</h3>
                <p>Đặt mật khẩu kiểu '123456' hay 'choemxin' rồi bị thằng bạn thân vào phá nhà thì tự ôm gối khóc chứ Admin không đòi lại được đâu à nha.</p>
                <br>
                <h3>Nạp Tiền Là Tự Nguyện</h3>
                <p>Tiền nạp vào để nuôi server nuôi Admin ăn mì tôm qua ngày. Đã giao dịch xong là <b>miễn trả lại dưới mọi hình thức</b>. Cố tình hoàn tiền (refund) là ăn BAN bay màu vĩnh viễn.</p>
            `,
            notice: `
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
            priv: `
                <h3>Dữ Liệu Bị Săn Lùng</h3>
                <p>Để chống phá hoại, tụi mình sẽ tự động lưu lại: Địa chỉ IP, Tên nhân vật, Nhật ký chat (để bắt quả tang nếu chửi bậy) và Lịch sử giao dịch mua đồ.</p>
                <br>
                <h3>Thời Gian Lưu Trữ</h3>
                <p>Dữ liệu được giữ kín cho đến khi server sập (hoặc Admin quên gia hạn hosting). Cam kết không bán dữ liệu cho bên thứ ba để quảng cáo sim số hay bảo hiểm đâu yên tâm!</p>
            `
        }
    },

    // 5. INTERFAZ (Giao diện hiển thị tiếng Việt phẳng)
    interface: {
        flag: "vn", 
        name: "Tiếng Việt",
        nav: { home: "Trang Chủ", staff: "Đội Ngũ", rules: "Luật", faq: "Cách Chơi" },
        hero: { subtitle: "Đồng Cỏ Mây - Trải nghiệm sinh tồn đỉnh cao", btn_copy: "SAO CHÉP IP", online: "đang chơi" },
        titles: { staff: "BAN QUẢN TRỊ", rules: "LUẬT SERVER", faq: "LỆNH & CÁCH CHƠI", legal: "CHÍNH SÁCH" },
        legal_tabs: { tos: "Điều Khoản", priv: "Bảo Mật", notice: "Bản Quyền" }
    }
};
