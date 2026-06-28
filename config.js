/* ================================================================
   VANGUARD THEME - CONFIGURATION (FULL CONTENT VERSION)
   ================================================================ */

const config = {
    // 1. INFO SERVIDOR
    serverName: "VanguardMC",
    serverIp: "mc.diosesmc.net",
    serverLogo: "logo.png", // Asegúrate de que existe
    // El favicon se carga automáticamente si se llama "favicon.png"

    // 2. REDES SOCIALES
    social: {
        discord: "https://discord.ejemplo.com",
        store: "https://tienda.ejemplo.com",
        twitter: "https://twitter.ejemplo.com",
        instagram: "https://instagram.ejemplo.com",
        tiktok: "https://tiktok.ejemplo.com",
        youtube: "https://youtube.ejemplo.com"
    },

    // 3. ENLACES DE VOTACIÓN (6 Sitios)
    voteLinks: [
        { name: "NameMC", url: "https://namemc.com" },
        { name: "MinecraftMP", url: "https://minecraft-mp.com" },
        { name: "PlanetMinecraft", url: "https://planetminecraft.com" },
        { name: "TopG", url: "https://topg.org/minecraft-servers/" },
        { name: "MinecraftServers", url: "https://minecraftservers.org/" },
        { name: "BestServers", url: "https://bestservers.com/" }
    ],

    // 4. CONTENIDO (Español _es / Inglés _en UNIFICADOS)
    content: {
        // --- STAFF ---
        staff: [
            { 
                name: "OwnerJuan", role: "OWNER", 
                bio_es: "Fundador del proyecto, encargado del desarrollo técnico y sistemas.",
                bio_en: "Project founder, in charge of technical development and systems."
            },
            { 
                name: "AdminMaria", role: "ADMIN", 
                bio_es: "Gestora de la comunidad, eventos y resolución de conflictos.",
                bio_en: "Community manager, events coordinator and conflict resolution."
            },
            { 
                name: "DevCarlos", role: "DEV", 
                bio_es: "Programador de plugins y optimización del servidor.",
                bio_en: "Plugin developer and server optimization specialist."
            },
            { 
                name: "ModAlex", role: "MOD", 
                bio_es: "Encargado de reportes, vigilancia y soporte a usuarios.",
                bio_en: "In charge of reports, surveillance, and user support."
            }
        ],

        // --- REGLAS (8 Reglas Comunes) ---
        rules: [
            { 
                title_es: "1. Respeto Mutuo", desc_es: "Mantén un lenguaje adecuado. No se toleran insultos, racismo, sexismo o toxicidad hacia jugadores o staff.",
                title_en: "1. Mutual Respect", desc_en: "Keep language appropriate. Insults, racism, sexism, or toxicity towards players or staff are not tolerated."
            },
            { 
                title_es: "2. No Hacks/Cheats", desc_es: "El uso de clientes modificados (KillAura, Xray, Fly, etc.) resultará en un baneo permanente e inapelable.",
                title_en: "2. No Hacks/Cheats", desc_en: "Using modified clients (KillAura, Xray, Fly, etc.) will result in a permanent and unappealable ban."
            },
            { 
                title_es: "3. No Spam/Flood", desc_es: "Prohibido enviar mensajes repetitivos, mayúsculas excesivas o promocionar otros servidores (IPs o enlaces).",
                title_en: "3. No Spam/Flood", desc_en: "Sending repetitive messages, excessive caps, or promoting other servers (IPs or links) is forbidden."
            },
            { 
                title_es: "4. Seguridad de Cuenta", desc_es: "Eres responsable de tu cuenta. No compartas tu contraseña. El staff nunca te pedirá tu clave.",
                title_en: "4. Account Security", desc_en: "You are responsible for your account. Do not share your password. Staff will never ask for your password."
            },
            { 
                title_es: "5. Abuso de Bugs", desc_es: "Aprovecharse de errores del juego o del servidor para beneficio propio está prohibido. Repórtalos inmediatamente.",
                title_en: "5. Bug Abuse", desc_en: "Exploiting game or server errors for personal gain is prohibited. Report them immediately."
            },
            { 
                title_es: "6. Griefing", desc_es: "No está permitido destruir construcciones ajenas ni robar en zonas protegidas. Respeta el trabajo de los demás.",
                title_en: "6. Griefing", desc_en: "Destroying others' builds or stealing in protected areas is not allowed. Respect the work of others."
            },
            { 
                title_es: "7. Nombres y Skins", desc_es: "Los nombres de usuario y skins no deben contener contenido ofensivo, sexual o político.",
                title_en: "7. Names & Skins", desc_en: "Usernames and skins must not contain offensive, sexual, or political content."
            },
            { 
                title_es: "8. Decisión del Staff", desc_es: "Las decisiones de los administradores son finales. Discutir sanciones públicamente puede llevar a mayores castigos.",
                title_en: "8. Staff Discretion", desc_en: "Administrator decisions are final. Publicly arguing about sanctions may lead to further punishment."
            }
        ],

        // --- PREGUNTAS FRECUENTES (8 FAQs) ---
        faq: [
            { 
                q_es: "¿Cuál es la IP del servidor?", a_es: "La IP para conectarse es <b>play.vanguard.net</b>. El servidor es compatible con las versiones 1.16 hasta la 1.21 de Minecraft Java Edition.",
                q_en: "What is the Server IP?", a_en: "The connection IP is <b>play.vanguard.net</b>. The server supports Minecraft Java Edition versions 1.16 through 1.21."
            },
            { 
                q_es: "¿Es Premium o No-Premium?", a_es: "Somos un servidor <b>Semi-Premium</b>. Esto significa que puedes entrar tanto con una cuenta oficial de Mojang/Microsoft como con lanzadores no oficiales.",
                q_en: "Is it Premium or Cracked?", a_en: "We are a <b>Semi-Premium</b> server. This means you can join with both official Mojang/Microsoft accounts and unofficial launchers."
            },
            { 
                q_es: "¿Dónde puedo comprar rangos?", a_es: "Puedes visitar nuestra tienda oficial haciendo clic en el botón del carrito arriba o visitando <b>tienda.vanguard.net</b>. Aceptamos PayPal y tarjetas.",
                q_en: "Where can I buy ranks?", a_en: "You can visit our official store by clicking the cart button above or visiting <b>store.vanguard.net</b>. We accept PayPal and cards."
            },
            { 
                q_es: "¿Cómo me postulo a Staff?", a_es: "Las postulaciones se abren mensualmente en nuestro Discord. Debes ser mayor de 16 años, tener micrófono y conocer las reglas.",
                q_en: "How do I apply for Staff?", a_en: "Applications open monthly on our Discord. You must be over 16, have a microphone, and know the rules."
            },
            { 
                q_es: "¿Está permitido el TPA?", a_es: "Sí, en la modalidad Survival puedes usar <code>/tpa [jugador]</code> para enviar una solicitud de teletransporte a tus amigos.",
                q_en: "Is TPA allowed?", a_en: "Yes, in Survival mode you can use <code>/tpa [player]</code> to send a teleport request to your friends."
            },
            { 
                q_es: "¿Cómo protejo mi casa?", a_es: "Utilizamos el sistema de protección por bloques (Pala de Oro). Simplemente haz clic en dos esquinas opuestas de tu terreno para protegerlo.",
                q_en: "How do I protect my house?", a_en: "We use the block protection system (Golden Shovel). Simply click on two opposite corners of your land to claim it."
            },
            { 
                q_es: "¿Tienen chat de voz?", a_es: "Sí, soportamos el mod <b>Simple Voice Chat</b>. No es obligatorio para jugar, pero mejora la experiencia en el servidor.",
                q_en: "Do you have Voice Chat?", a_en: "Yes, we support the <b>Simple Voice Chat</b> mod. It is not mandatory to play, but it enhances the server experience."
            },
            { 
                q_es: "¿Qué hago si veo a un hacker?", a_es: "Graba una prueba en video y abre un ticket en nuestro Discord. <b>No</b> acuses al jugador por el chat público para evitar que se desconecte.",
                q_en: "What if I see a hacker?", a_en: "Record video proof and open a ticket on our Discord. <b>Do not</b> accuse the player in public chat to prevent them from logging off."
            }
        ],

        // --- TEXTOS LEGALES COMPLETOS (HTML) ---
        legal: {
            // TÉRMINOS DEL SERVICIO
            tos_es: `
                <h3>Alcance del Servicio</h3>
                <p>El servidor, los servicios web y la infraestructura del launcher son proporcionados por Vanguard Networks S.L. El acceso al servicio es un privilegio, no un derecho.</p>
                <br>
                <h3>Responsabilidad de la Cuenta</h3>
                <p>La seguridad de la cuenta de usuario es responsabilidad exclusiva del jugador. VanguardMC no se hace responsable de pérdidas ocasionadas por el robo de cuentas, intercambio de contraseñas o descuidos de seguridad por parte del usuario.</p>
                <br>
                <h3>Pagos y Reembolsos</h3>
                <p>Las compras realizadas en la tienda del servidor se consideran bienes digitales intangibles. Conforme a la normativa vigente sobre productos digitales, una vez entregado el servicio o rango, <b>no se admiten devoluciones ni reembolsos</b> bajo ninguna circunstancia. Cualquier intento de devolución de cargo (chargeback) resultará en un bloqueo permanente de la cuenta.</p>
                <br>
                <h3>Sanciones</h3>
                <p>Las violaciones de las reglas del servidor pueden resultar en advertencias, silencios (mutes), expulsiones temporales o baneos permanentes. El equipo administrativo se reserva el derecho de restringir el acceso a cualquier usuario que considere perjudicial para la comunidad.</p>
            `,
            tos_en: `
                <h3>Scope of Service</h3>
                <p>The server, web services, and launcher infrastructure are provided by Vanguard Networks S.L. Access to the service is a privilege, not a right.</p>
                <br>
                <h3>Account Responsibility</h3>
                <p>User account security is the sole responsibility of the player. VanguardMC is not liable for losses caused by account theft, password sharing, or security negligence by the user.</p>
                <br>
                <h3>Payments and Refunds</h3>
                <p>Purchases made in the server store are considered intangible digital goods. In accordance with digital product regulations, once the service or rank is delivered, <b>no returns or refunds are accepted</b> under any circumstances. Any chargeback attempt will result in a permanent account ban.</p>
                <br>
                <h3>Sanctions</h3>
                <p>Violations of server rules may result in warnings, mutes, temporary kicks, or permanent bans. The administrative team reserves the right to restrict access to any user deemed harmful to the community.</p>
            `,

            // AVISO LEGAL
            notice_es: `
                <h3>Información de la Empresa</h3>
                <ul>
                    <li><b>Nombre Legal:</b> Vanguard Networks S.L.</li>
                    <li><b>Dirección:</b> Calle Falsa 123, Madrid, España (Sede operativa en Estambul, Turquía)</li>
                    <li><b>N° Fiscal:</b> ES-B12345678</li>
                    <li><b>Contacto Legal:</b> legal@vanguardmc.net</li>
                </ul>
                <br>
                <h3>Licencia y Derechos de Autor</h3>
                <p>VanguardMC no está afiliado, asociado ni respaldado por Mojang Studios, Microsoft ni ninguna de sus filiales. Minecraft es una marca registrada de Mojang Studios.</p>
                <p>Todos los activos del juego, texturas y modelos base están sujetos al EULA de Minecraft. El contenido original de la web y el servidor está protegido por derechos de autor de Vanguard Networks S.L.</p>
            `,
            notice_en: `
                <h3>Company Information</h3>
                <ul>
                    <li><b>Legal Name:</b> Vanguard Networks S.L.</li>
                    <li><b>Address:</b> Fake Street 123, Madrid, Spain (Operational HQ in Istanbul, Turkey)</li>
                    <li><b>Tax ID:</b> ES-B12345678</li>
                    <li><b>Legal Contact:</b> legal@vanguardmc.net</li>
                </ul>
                <br>
                <h3>License and Copyright</h3>
                <p>VanguardMC is not affiliated, associated, or endorsed by Mojang Studios, Microsoft, or any of their affiliates. Minecraft is a registered trademark of Mojang Studios.</p>
                <p>All game assets, textures, and base models are subject to the Minecraft EULA. Original web and server content is copyright of Vanguard Networks S.L.</p>
            `,

            // POLÍTICA DE PRIVACIDAD
            priv_es: `
                <h3>Datos Recopilados</h3>
                <p>Para el funcionamiento del servicio, recopilamos automáticamente la siguiente información:</p>
                <ul>
                    <li>Dirección IP (para seguridad y moderación).</li>
                    <li>UUID de Minecraft y nombre de usuario.</li>
                    <li>Registros de chat y comandos (logs).</li>
                    <li>Historial de transacciones de la tienda.</li>
                </ul>
                <br>
                <h3>Período de Retención</h3>
                <p>Los datos se almacenan de forma cifrada en nuestros servidores ubicados en la Unión Europea mientras la cuenta del jugador permanezca activa o sea necesario por razones legales y de seguridad.</p>
                <br>
                <h3>Sus Derechos</h3>
                <p>Usted tiene derecho al acceso, corrección, eliminación (derecho al olvido) y portabilidad de sus datos personales. Para ejercer estos derechos, por favor contacte a nuestro delegado de protección de datos en <b>privacy@vanguardmc.net</b>.</p>
            `,
            priv_en: `
                <h3>Collected Data</h3>
                <p>To operate the service, we automatically collect the following information:</p>
                <ul>
                    <li>IP Address (for security and moderation).</li>
                    <li>Minecraft UUID and username.</li>
                    <li>Chat logs and command history.</li>
                    <li>Store transaction history.</li>
                </ul>
                <br>
                <h3>Retention Period</h3>
                <p>Data is stored encrypted on our servers located in the European Union while the player account remains active or as required for legal and security reasons.</p>
                <br>
                <h3>Your Rights</h3>
                <p>You have the right to access, correct, delete (right to be forgotten), and port your personal data. To exercise these rights, please contact our data protection officer at <b>privacy@vanguardmc.net</b>.</p>
            `
        }
    },

    // 5. INTERFAZ (Botones, Títulos)
    interface: {
        es: {
            flag: "es", name: "Español",
            nav: { home: "Inicio", staff: "Equipo", rules: "Reglas", faq: "FAQ", vote: "Votar" },
            hero: { subtitle: "Dominio, Conquista y Gloria. Versión 1.21", btn_copy: "COPIAR IP", online: "en línea" },
            titles: { staff: "NUESTRO EQUIPO", rules: "NORMATIVA", faq: "PREGUNTAS FRECUENTES", vote: "VOTA POR EL SERVIDOR", legal: "CENTRO LEGAL" },
            legal_tabs: { tos: "Términos", priv: "Privacidad", notice: "Aviso Legal" }
        },
        en: {
            flag: "us", name: "English",
            nav: { home: "Home", staff: "Team", rules: "Rules", faq: "FAQ", vote: "Vote" },
            hero: { subtitle: "Dominance, Conquest and Glory. Version 1.21", btn_copy: "COPY IP", online: "online" },
            titles: { staff: "OUR TEAM", rules: "SERVER RULES", faq: "FREQUENTLY ASKED QUESTIONS", vote: "VOTE FOR US", legal: "LEGAL CENTER" },
            legal_tabs: { tos: "Terms", priv: "Privacy", notice: "Legal Notice" }
        }
    }
};