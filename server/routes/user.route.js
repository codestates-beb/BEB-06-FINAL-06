// 유저 관련된 라우터

const router = require('express').Router();

const {connection} = require('../connect/db.js')   
const mysql=require("mysql");

// 참고 확인 
// const connection = mysql.createConnection({
//     host : 'localhost',
//     port : '3306',
//     user : process.env.DATABASE_USERNAME,
//     password : process.env.DATABASE_PASSWORD
// });

// 유저 테이블 모두 받기
router.get('/findall', function(req, res){
    connection.query('SELECT * FROM users', function(err, result){
        res.send(result)
    })
})

// 유저 회원가입 
router.post('/signup', function(req, res){
        const address = req.body.user_address;
        const nickname = req.body.user_nickname;
        const profileimg = 'https://i.seadn.io/gae/XSWGq3kn8k6NKlnMkgJK6MTWjUZBv0F4v6xpyhsCDDB4pfjMp6W4YU6L4xFAna1P4TGkuKPDhagdp_oPY1bgqelrLOy95Kxfou-SkA?auto=format&w=384'
        const token1amount = 0;
        const token2amount = 0;
        const score = 0;
        console.log(req.body)
        console.log(profileimg)
        connection.query(`SELECT * FROM users where user_address = "${address}"`, [address], function(err, result){
            if(err) return console.log(err);
            console.log( result.length);
            if(result.length){
                // res.status(400).json({message: "address is exist"});
                res.status(400).send("이미 가입된 지갑 주소 입니다.");
            }else{
                connection.query('INSERT INTO users(user_address, user_nickname, user_token1amount, user_token2amount, user_score, user_img) VALUES(?,?,?,?,?,?)', [address, nickname, token1amount, token2amount, score, profileimg], function(err, result){
                    if(err) return console.log(err)
                    // console.log(result)
                    res.status(200).json({result: result});
                })
            }
        })
    })


    // connection.end();
module.exports = router;