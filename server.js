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
                25% { background-position: 100% 50%; }
                50% { background-position: 50% 100%; }
                75% { background-position: 0% 50%; }
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

            .avatar {
                width: 160px;
                height: 160px;
                border-radius: 50%;
                margin-bottom: 30px;
                border: 8px solid;
                border-image: linear-gradient(135deg, #ff4757, #ffffff) 1;
                object-fit: cover;
                animation: bounce 2.5s ease-in-out infinite;
                box-shadow: 0 15px 40px rgba(255, 71, 87, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.5);
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
            }const http = require('http');  // ✅ เพิ่มบรรทัดนี้
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;
const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release();
    
    let html = `<h1>ฐานขอมูลนักศึกษา (ทดสอบการเชื่อมตอ)</h1>`;
    html += `<table border="1" cellpadding="10">`;
    html += `<tr><th>รหัสนักศึกษา</th><th>ชื่อ-นามสกุล</th></tr>`;  // ✅ แก้ไข
    
    result.rows.forEach(row => {
      html += `<tr><td>${row.student_id}</td><td>${row.student_name}</td></tr>`;
    });
    
    html += `</table>`;
    res.end(html);
  } catch (err) {
    console.error(err);
    res.end(`<h1>เกิดขอผิดพลาด!</h1><p>${err.message}</p>`);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
