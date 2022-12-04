const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config();            // env 파일 사용
app.use(express.json({limit: '100mb'}));   // express에서 body에 json을 읽어오기 위해 선언
app.use(cookieParser());
app.use(cors({origin:true, credentials: true}));  // 다른 서버와 통신하려면 cors 필요 
app.use(express.urlencoded({limit: '100mb', extended: false}));
const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`${PORT} 서버에 연결되었습니다.`)
});

app.use('/user',require('./routes/user.route')) // 유저
app.use('/item',require('./routes/item.route')) // 아이템
app.use('/nft',require('./routes/nft.route'))   // nft
app.use('/game',require('./routes/game.route')) // 게임
app.use('/post',require('./routes/post.route')) // 게시글
app.use('/token',require('./routes/token.route')) // 토큰

// 정원님 코드 참고용으로 안지웠습니다. 
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// const express = require("express"); // ok
// const cors = require("cors");    // ok
// const multer = require("multer");    // 이미지 업로드 모듈
// const dotenv = require("dotenv"); // ok
// const mysql = require("mysql");  // ok
// dotenv.config();                 // ok
// const app = express();           // ok
// const router = express.Router();
// app.use(express.json());         // ok
// app.use(cors());                 // ok
// app.use('/', router);

// const PORT = process.env.PORT;

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : process.env.DATABASE_USERNAME,
//     password : process.env.DATABASE_PASSWORD
// });

// connection.connect();

// connection.query("CREATE DATABASE if not exists JETRIS", function(err, result){
//     if(err) return console.log(err);
//     console.log(result);
// })

// connection.query("USE JETRIS", function(err, result){
//     if(err) return console.log(err);
// })

// connection.query("CREATE TABLE if not exists user(user_address varchar(255), user_nickname varchar(255))", 
// function(err, result){
//     if(err) return console.log(err);
// })

// router.post('/register', function(req, res){
//     const address = req.body.user_address;
//     const nickname = req.body.user_nickname;
//     connection.query(`SELECT * FROM user where user_address = "${address}"`, [address], function(err, result){
//         if(err) return console.log(err);
//         console.log(result);
//         if(result.length){
//             res.status(400).json({message: "address is exist"});
//         }else{
//             connection.query('INSERT INTO user(user_address, user_nickname) VALUES(?, ?)', [address, nickname], function(err, result){
//                 if(err) return console.log(err)
//                 console.log(result)
//                 res.status(200).json({result: result});
//             })
//         }
//     })
// })

// app.listen(PORT, function(){
//     console.log(`listening on ${PORT}`);
// })
