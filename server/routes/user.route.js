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
    connection.query('SELECT * FROM user', function(err, result){
        res.send(result)
    })
})

// 유저 회원가입 
router.post('/signup', function(req, res){
        const address = req.body.user_address;
        const nickname = req.body.user_nickname;
        const token1amount = 10;
        const token2amount = 0;
        console.log(address,nickname)
        
        connection.query(`SELECT * FROM user where user_address = "${address}"`, [address], function(err, result){
            if(err) return console.log(err);
            console.log(result);
            if(result.length){
                // res.send('계정중복임')
                res.status(400).json({message: "address is exist"});
            }else{
                connection.query('INSERT INTO user(user_address, user_nickname, user_token1amount, user_token2amount) VALUES(?, ?,?,?)', [address, nickname, token1amount, token2amount], function(err, result){
                    if(err) return console.log(err)
                    console.log(result)
                    res.status(200).json({result: result});
                })
            }
        })
    })
    // connection.end();
module.exports = router;