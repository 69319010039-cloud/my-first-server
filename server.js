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
                background: linear-gradient(135deg, #ffeef8, #e0f4ff, #ffccf5, #ccf0ff);
                background-size: 400% 400%;
                animation: gradientShift 15s ease infinite;
                position: relative;
            }

            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
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
                background: radial-gradient(circle at 30% 30%, rgba(255, 200, 230, 0.8), rgba(150, 200, 255, 0.3));
                border-radius: 50%;
                opacity: 0.6;
                animation: float linear infinite;
            }

            .bubble:nth-child(1) { width: 60px; height: 60px; bottom: -60px; left: 10%; animation-duration: 8s; }
            .bubble:nth-child(2) { width: 80px; height: 80px; bottom: -80px; left: 20%; animation-duration: 10s; animation-delay: 1s; }
            .bubble:nth-child(3) { width: 40px; height: 40px; bottom: -40px; left: 30%; animation-duration: 7s; animation-delay: 2s; }
            .bubble:nth-child(4) { width: 70px; height: 70px; bottom: -70px; left: 40%; animation-duration: 11s; animation-delay: 0.5s; }
            .bubble:nth-child(5) { width: 50px; height: 50px; bottom: -50px; left: 50%; animation-duration: 9s; animation-delay: 1.5s; }
            .bubble:nth-child(6) { width: 85px; height: 85px; bottom: -85px; left: 60%; animation-duration: 12s; animation-delay: 0.8s; }
            .bubble:nth-child(7) { width: 45px; height: 45px; bottom: -45px; left: 70%; animation-duration: 8.5s; animation-delay: 2.2s; }
            .bubble:nth-child(8) { width: 65px; height: 65px; bottom: -65px; left: 80%; animation-duration: 10.5s; animation-delay: 1.2s; }
            .bubble:nth-child(9) { width: 55px; height: 55px; bottom: -55px; left: 90%; animation-duration: 9.5s; animation-delay: 0.3s; }

            @keyframes float {
                0% {
                    transform: translateY(100vh) translateX(0) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) translateX(100px) scale(0.8);
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
                width: 3px;
                height: 3px;
                background: #fff;
                border-radius: 50%;
                animation: twinkle 3s ease-in-out infinite;
            }

            @keyframes twinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
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
                background: rgba(255, 255, 255, 0.98);
                width: 85%;
                max-width: 750px;
                padding: 50px;
                border-radius: 35px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(150, 100, 200, 0.3), 0 0 40px rgba(200, 150, 255, 0.2);
                animation: slideUp 1s ease-out;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(200, 150, 255, 0.3);
                position: relative;
                overflow: hidden;
            }

            .card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background: linear-gradient(90deg, #ff69b4, #87ceeb, #ff69b4);
                animation: shimmer 2s infinite;
            }

            @keyframes shimmer {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .avatar {
                width: 140px;
                height: 140px;
                border-radius: 50%;
                margin-bottom: 25px;
                border: 6px solid;
                border-image: linear-gradient(135deg, #ff69b4, #87ceeb) 1;
                object-fit: cover;
                animation: bounce 2s ease-in-out infinite;
                box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
            }

            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
            }

            h1 {
                color: #ff1493;
                margin-bottom: 15px;
                font-size: 2.5rem;
                font-weight: 700;
                text-shadow: 0 2px 10px rgba(255, 105, 180, 0.2);
                animation: fadeIn 1.2s ease-out;
            }

            h2 {
                color: #4169e1;
                margin-bottom: 15px;
                font-size: 1.4rem;
                font-weight: 600;
            }

            p {
                color: #555;
                font-size: 1.1rem;
                margin-bottom: 12px;
                line-height: 1.6;
                animation: fadeIn 1.4s ease-out;
            }

            .info {
                background: linear-gradient(135deg, rgba(255, 192, 203, 0.3), rgba(135, 206, 235, 0.3));
                padding: 25px;
                border-radius: 20px;
                margin-top: 25px;
                border: 2px solid rgba(255, 105, 180, 0.3);
                backdrop-filter: blur(5px);
                animation: fadeIn 1.6s ease-out;
            }

            .status {
                color: #ff1493;
                font-weight: bold;
                font-size: 1.3rem;
                animation: pulse 2s ease-in-out infinite;
            }

            @keyframes pulse {
                0%, 100% { 
                    opacity: 1;
                    transform: scale(1);
                }
                50% { 
                    opacity: 0.85;
                    transform: scale(1.05);
                }
            }

            .info p:last-child {
                color: #4169e1;
                font-size: 1rem;
            }

            footer {
                margin-top: 25px;
                color: #87ceeb;
                font-size: 0.95rem;
                font-weight: 500;
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
                font-size: 3rem;
                animation: float-emoji 6s ease-in-out infinite;
            }

            .emoji1 { top: 15%; left: 8%; animation-delay: 0s; }
            .emoji2 { top: 25%; right: 10%; animation-delay: 1s; }
            .emoji3 { bottom: 20%; left: 10%; animation-delay: 2s; }
            .emoji4 { bottom: 15%; right: 8%; animation-delay: 1.5s; }

            @keyframes float-emoji {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-30px) rotate(10deg); }
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
        <div class="decoration emoji1 emoji-float">✨</div>
        <div class="decoration emoji2 emoji-float">💕</div>
        <div class="decoration emoji3 emoji-float">🌸</div>
        <div class="decoration emoji4 emoji-float">⭐</div>

        <!-- Main container -->
        <div class="container">
            <div class="card">
                <img class="avatar"
                src="https://i.pinimg.com/736x/3f/22/1a/3f221a0ad41e2d4e3c13a101c0d9f870.jpg"
                alt="Profile">

                <h1>🌸 Welcome to My Web Server 🌸</h1>

                <h2>นางสาวสุธิดา เคลือบคนโท</h2>

                <p>รหัสนักศึกษา : 69319010039</p>
                <p>สาขาเทคโนโลยีสารสนเทศ (IT)</p>

                <div class="info">
                    <p class="status">✅ Railway Server กำลังทำงานปกติ</p>
                    <p>Node.js HTTP Server พร้อมใช้งาน 🚀</p>
                </div>

                <footer>
                    วิทยาลัยเทคโนโลยีชลบุรี | ปีการศึกษา 2569
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
