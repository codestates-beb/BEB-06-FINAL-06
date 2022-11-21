// 게임 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");

// 게임 종료시 유저 정보 변경
router.post('/update', function(req, res){
    const address = req.body.address;   // 받아온 유저 점수
    const score = req.body.score;       // 받아온 점수
    const token1 = parseFloat(req.body.token1);     //  받아온 토큰 1의 갯수
    console.log(req.body)
    
    // 현재 유저의 토큰1 갯수를 가져옴
    connection.query(`SELECT user_token1amount FROM users WHERE user_address = "${address}"`, function(err,result){
        const updatetoken1 = result[0].user_token1amount + token1;
        // 가져온 토큰갯수와 스코어로 받은 토큰갯수를 더해서 DB에 업데이트 해줌
        connection.query(`UPDATE users SET user_score="${score}",user_token1amount="${updatetoken1}" WHERE user_address="${address}"`, function(err, result){
            if(err) return console.log(err)
            res.status(200).json({result: result});
        })



    })

    
})

module.exports = router;