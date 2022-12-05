// 아이템 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const jwt = require('jsonwebtoken');


// JTT 스테이킹
router.post('/steaking', function(req,res){
    // console.log(req)
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        const user_token2amount = data.user_token2amount;    // JTT 토큰 갯수
        const user_jttsteaking = data.jttsteaking;     // 현재 저장된 유저 JTT 스테이킹 수
        const jttsteaking = parseInt(req.body.jttsteaking)    // 유저가 지금 저장한 JTT 수
        console.log(req.body)
        console.log(jttsteaking)
        connection.query(`UPDATE users SET jttsteaking ="${user_jttsteaking + jttsteaking}" WHERE user_address = "${user_address}"`,
        function(err,result){
            // 유저 JTT 수 감소
            // console.log("jttsteaking 업데이트")
            connection.query(`UPDATE users SET user_token2amount ="${user_token2amount - jttsteaking}" WHERE user_address = "${user_address}"`,    
            function(err,result){
                // console.log("token2 업데이트")
                // console.log(result)
                res.status(200).send(result) 
                // res.status(200).send("프로필 변경 완료") 
                }
            )
            // res.status(200).send("스테이킹 완료") 
            }
        )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  
})

// staeking 보상
router.get('/reward' , function (req, res) {
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        const user_jttsteaking = data.jttsteaking;     // 현재 저장된 유저 JTT 스테이킹 수
        // const user_token2amount = data.user_token2amount; // 현재 유저의 JTT 갯수
        const user_token1amount = data.user_token1amount; // 현재 유저의 JT 갯수
        // const nfts = []
        // 유저의 jttstaeking 값을 0으로 만든다.
        connection.query(`UPDATE users SET jttsteaking ="0" WHERE user_address = "${user_address}"`,
        function(err,result){
            // 유저의 JT값을 jttsteaking / 100 만큼 추가한다.
            connection.query(`UPDATE users SET user_token1amount ="${user_token1amount + (user_jttsteaking/100)}" WHERE user_address = "${user_address}"`,    
            function(err,result){
                res.status(200).send(result) 
                }
            )
            }
        )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})



module.exports = router;