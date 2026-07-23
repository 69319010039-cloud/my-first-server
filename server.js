const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Web Server</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:'Segoe UI', Tahoma, sans-serif;
            }

            body{
                height:100vh;
                overflow:hidden;
                background: linear-gradient(135deg, #ff4757, #ee5a6f, #ffffff, #ffe0e0, #ff69b4);
                background-size: 400% 400%;
                animation: gradientShift 20s ease infinite;
                position: relative;
            }

            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                25% { background-position: 50% 100%; }
                50% { background-position: 100% 50%; }
                75% { background-position: 50% 0%; }
                100% { background-position: 0% 50%; }
            }

            /* Animated bubbles */
            .bubbles {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                overflow: hidden;
            }

            .bubble {
                position: absolute;
                background: radial-gradient(circle at 30% 30%, rgba(255, 71, 87, 0.6), rgba(255, 255, 255, 0.2));
                border-radius: 50%;
                opacity: 0.5;
                animation: float linear infinite;
                box-shadow: 0 0 30px rgba(255, 71, 87, 0.3);
            }

            .bubble:nth-child(1) { width: 80px; height: 80px; bottom: -80px; left: 10%; animation-duration: 12s; }
            .bubble:nth-child(2) { width: 100px; height: 100px; bottom: -100px; left: 20%; animation-duration: 14s; animation-delay: 1s; }
            .bubble:nth-child(3) { width: 60px; height: 60px; bottom: -60px; left: 30%; animation-duration: 10s; animation-delay: 2s; }
            .bubble:nth-child(4) { width: 90px; height: 90px; bottom: -90px; left: 40%; animation-duration: 15s; animation-delay: 0.5s; }
            .bubble:nth-child(5) { width: 70px; height: 70px; bottom: -70px; left: 50%; animation-duration: 13s; animation-delay: 1.5s; }
            .bubble:nth-child(6) { width: 110px; height: 110px; bottom: -110px; left: 60%; animation-duration: 16s; animation-delay: 0.8s; }
            .bubble:nth-child(7) { width: 65px; height: 65px; bottom: -65px; left: 70%; animation-duration: 11s; animation-delay: 2.2s; }
            .bubble:nth-child(8) { width: 85px; height: 85px; bottom: -85px; left: 80%; animation-duration: 14.5s; animation-delay: 1.2s; }
            .bubble:nth-child(9) { width: 75px; height: 75px; bottom: -75px; left: 90%; animation-duration: 12.5s; animation-delay: 0.3s; }

            @keyframes float {
                0% {
                    transform: translateY(100vh) translateX(0) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.2;
                }
                100% {
                    transform: translateY(-100vh) translateX(150px) scale(0.6);
                    opacity: 0;
                }
            }

            /* Stars sparkle animation */
            .stars {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }

            .star {
                position: absolute;
                width: 4px;
                height: 4px;
                background: #ffffff;
                border-radius: 50%;
                animation: twinkle 3s ease-in-out infinite;
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            }

            @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1); }
            }

            /* Main content */
            .container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10;
            }

            .card{
                background: rgba(255, 255, 255, 0.96);
                width: 85%;
                max-width: 850px;
                padding: 60px;
                border-radius: 40px;
                text-align: center;
                box-shadow: 0 30px 90px rgba(255, 71, 87, 0.4), 0 0 60px rgba(255, 105, 180, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8);
                animation: slideUp 1.2s ease-out;
                backdrop-filter: blur(15px);
                border: 3px solid rgba(255, 71, 87, 0.4);
                position: relative;
                overflow: hidden;
            }

            .card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 6px;
                background: linear-gradient(90deg, #ff4757, #ff69b4, #ff4757);
                animation: shimmer 2.5s infinite;
            }

            .card::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ff4757, #ff69b4, #ff4757);
                animation: shimmer 2.5s infinite reverse;
            }

            @keyframes shimmer {
                0%, 100% { opacity: 0.6; }
                50% { opacity: 1; }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(80px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Wrapper handles the gradient ring; border-image cannot be
               combined with border-radius, so the ring is now built with
               padding + background instead of border-image. */
            .avatar-wrapper {
                width: 176px;
                height: 176px;
                border-radius: 50%;
                padding: 8px;
                margin: 0 auto 30px;
                background: linear-gradient(135deg, #ff4757, #ffffff);
                animation: bounce 2.5s ease-in-out infinite;
                box-shadow: 0 15px 40px rgba(255, 71, 87, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.5);
            }

            .avatar {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
                object-fit: cover;
            }

            @keyframes bounce {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-20px) scale(1.02); }
            }

            h1 {
                color: #ff4757;
                margin-bottom: 20px;
                font-size: 2.8rem;
                font-weight: 800;
                text-shadow: 0 4px 15px rgba(255, 71, 87, 0.3), 0 0 20px rgba(255, 255, 255, 0.8);
                animation: fadeIn 1.2s ease-out;
                letter-spacing: 1px;
            }

            h2 {
                color: #ff4757;
                margin-bottom: 15px;
                font-size: 1.6rem;
                font-weight: 700;
                animation: fadeIn 1.4s ease-out;
            }

            .nickname {
                color: #ffffff;
                background: linear-gradient(135deg, #ff4757, #ff69b4);
                padding: 12px 30px;
                border-radius: 25px;
                font-size: 1.4rem;
                font-weight: 700;
                display: inline-block;
                margin: 15px 0;
                box-shadow: 0 8px 25px rgba(255, 71, 87, 0.4);
                animation: fadeIn 1.5s ease-out;
                letter-spacing: 0.5px;
            }

            p {
                color: #333;
                font-size: 1.1rem;
                margin-bottom: 12px;
                line-height: 1.8;
                animation: fadeIn 1.4s ease-out;
            }

            .info {
                background: linear-gradient(135deg, rgba(255, 71, 87, 0.15), rgba(255, 255, 255, 0.4));
                padding: 30px;
                border-radius: 25px;
                margin-top: 30px;
                border: 2px solid rgba(255, 71, 87, 0.3);
                backdrop-filter: blur(10px);
                animation: fadeIn 1.6s ease-out;
                box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.5);
            }

            .status {
                color: #ff4757;
                font-weight: 900;
                font-size: 1.4rem;
                animation: pulse 2s ease-in-out infinite;
                text-shadow: 0 2px 8px rgba(255, 71, 87, 0.3);
            }

            @keyframes pulse {
                0%, 100% { 
                    opacity: 1;
                    transform: scale(1);
                }
                50% { 
                    opacity: 0.8;
                    transform: scale(1.08);
                }
            }

            .info p:last-child {
                color: #ff4757;
                font-size: 1.1rem;
                font-weight: 600;
            }

            footer {
                margin-top: 30px;
                color: #ff4757;
                font-size: 1rem;
                font-weight: 600;
                animation: fadeIn 1.8s ease-out;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            /* Decorative elements */
            .decoration {
                position: absolute;
                pointer-events: none;
            }

            .emoji-float {
                position: absolute;
                font-size: 4rem;
                animation: float-emoji 7s ease-in-out infinite;
                filter: drop-shadow(0 0 10px rgba(255, 71, 87, 0.3));
            }

            .emoji1 { top: 12%; left: 5%; animation-delay: 0s; }
            .emoji2 { top: 20%; right: 8%; animation-delay: 1s; }
            .emoji3 { bottom: 15%; left: 8%; animation-delay: 2s; }
            .emoji4 { bottom: 12%; right: 6%; animation-delay: 1.5s; }

            @keyframes float-emoji {
                0%, 100% { transform: translateY(0) rotate(-5deg); }
                50% { transform: translateY(-40px) rotate(5deg); }
            }

            /* Animated lines */
            .line-decoration {
                position: absolute;
                height: 3px;
                background: linear-gradient(90deg, transparent, #ff4757, transparent);
                animation: slide linear infinite;
            }

            .line1 { top: 20%; width: 200px; left: -200px; animation-duration: 8s; }
            .line2 { bottom: 30%; width: 250px; right: -250px; animation-duration: 10s; animation-delay: 2s; }

            @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(500px); }
            }
        </style>
    </head>

    <body>
        <!-- Animated bubbles background -->
        <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>

        <!-- Floating emojis -->
        <div class="decoration emoji1 emoji-float">💖</div>
        <div class="decoration emoji2 emoji-float">✨</div>
        <div class="decoration emoji3 emoji-float">🎀</div>
        <div class="decoration emoji4 emoji-float">💕</div>

        <!-- Animated lines -->
        <div class="line-decoration line1"></div>
        <div class="line-decoration line2"></div>

        <!-- Main container -->
        <div class="container">
            <div class="card">
                <div class="avatar-wrapper">
                    <img class="avatar"
                    src="https://i.pinimg.com/736x/3f/22/1a/3f221a0ad41e2d4e3c13a101c0d9f870.jpg"
                    alt="Profile">
                </div>

                <h1>🌹 Welcome to My Server 🌹</h1>

                <h2>นางสาวสุธิดา เคลือบคนโท</h2>

                <div class="nickname">ชื่อเล่น : แก้ม</div>

                <p><strong>รหัสนักศึกษา :</strong> 69319010039</p>
                <p><strong>สาขา :</strong> เทคโนโลยีสารสนเทศ (IT)</p>

                <div class="info">
                    <p class="status">✅ Server กำลังทำงานปกติ</p>
                    <p>🚀 Node.js HTTP Server พร้อมใช้งาน</p>
                </div>

                <footer>
                    💼 วิทยาลัยเทคโนโลยีชลบุรี | ปีการศึกษา 2569
                </footer>
            </div>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, () => {
    console.log(
        `Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`
    );
});
