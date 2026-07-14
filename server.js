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
                display:flex;
                justify-content:center;
                align-items:center;
                background: linear-gradient(135deg, #ff9a9e, #fad0c4, #a1c4fd);
            }

            .card{
                background:rgba(255,255,255,0.95);
                width:80%;
                max-width:700px;
                padding:40px;
                border-radius:25px;
                text-align:center;
                box-shadow:0 15px 35px rgba(0,0,0,0.2);
                animation:fadeIn 1s ease-in-out;
            }

            .avatar{
                width:120px;
                height:120px;
                border-radius:50%;
                margin-bottom:20px;
                border:5px solid #4f46e5;
                object-fit:cover;
            }

            h1{
                color:#4f46e5;
                margin-bottom:15px;
                font-size:2rem;
            }

            h2{
                color:#333;
                margin-bottom:10px;
            }

            p{
                color:#555;
                font-size:1.1rem;
                margin-bottom:15px;
            }

            .info{
                background:#eef2ff;
                padding:15px;
                border-radius:15px;
                margin-top:20px;
            }

            .status{
                color:#16a34a;
                font-weight:bold;
                font-size:1.2rem;
            }

            footer{
                margin-top:25px;
                color:#666;
                font-size:0.9rem;
            }

            @keyframes fadeIn{
                from{
                    opacity:0;
                    transform:translateY(30px);
                }
                to{
                    opacity:1;
                    transform:translateY(0);
                }
            }
        </style>
    </head>

    <body>
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
                <p>Node.js HTTP Server พร้อมใช้งาน</p>
            </div>

            <footer>
                วิทยาลัยเทคโนโลยีชลบุรี | ปีการศึกษา 2569
            </footer>

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
