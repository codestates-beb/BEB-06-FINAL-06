// 게임 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");
const jwt = require('jsonwebtoken');
// 게임 종료시 유저 정보 변경
// router.post('/update', function(req, res){
//     const address = req.body.address;   // 받아온 유저 점수
//     const score = req.body.score;       // 받아온 점수
//     const token1 = parseFloat(req.body.token1);     //  받아온 토큰 1의 갯수
//     console.log(req.body)
    
//     // 현재 유저의 토큰1 갯수를 가져옴
//     connection.query(`SELECT user_token1amount FROM users WHERE user_address = "${address}"`, function(err,result){
//         const updatetoken1 = result[0].user_token1amount + token1;
//         // 가져온 토큰갯수와 스코어로 받은 토큰갯수를 더해서 DB에 업데이트 해줌
//         connection.query(`UPDATE users SET user_score="${score}",user_token1amount="${updatetoken1}" WHERE user_address="${address}"`, function(err, result){
//             if(err) return console.log(err)
//             res.status(200).json({result: result});
//         })
//     })
// })



// 게임종료 시 유저처리
router.post('/update', function(req,res){
    try{
    // console.log(req.body)
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
    const user_address = data.user_address; // 쿠키에 있는 유저 주소

    const userGameScore = req.body.score   // 유저의 현재 게임점수
    const user_score = req.body.user_score; // 기존 유저 최고 점수
    const user_rating = req.body.user_rating; // 유저 아이템 등급
    const user_token1amount = req.body.user_token1amount; // 유저 토큰1 갯수
    
    let totalGameScore = 0; // 점수 정산
    let userReward = 0; // 유저에게 보상

    console.log(req.body)
    console.log(typeof(user_rating) )
    // 유저 점수 비교
    if(user_rating === 'legend'){
        totalGameScore = userGameScore + 2000   
        console.log('레전드 : '+totalGameScore) 
    }else if(user_rating === 'unique'){
        totalGameScore = userGameScore + 500    
        console.log('유니크 : '+totalGameScore) 
    }else if(user_rating === 'rare'){
        totalGameScore = userGameScore + 100    
        console.log('레어 : '+totalGameScore) 
    }else{
        totalGameScore = userGameScore
        console.log('노말 : '+totalGameScore) 
    }

    if(user_score < totalGameScore){
        connection.query(`UPDATE users SET user_score ="${totalGameScore}" WHERE user_address = "${user_address}"`,
        function(err,result){    
            // res.status(200).send(totalGameScore) 
            userReward = user_token1amount +  (totalGameScore/100)
            
            userReward = user_token1amount +  (totalGameScore/100)
            console.log("최고점수 갱신 !!")
            console.log(`기존 유저 최고점수 : ${user_score}`)
            console.log(`이번 유저 기록 : ${totalGameScore}`)
            console.log(`기존 유저 토큰 갯수 : ${user_token1amount}`)
            console.log(`토큰 보상 후 갯수 : ${userReward}`)

            connection.query(`UPDATE users SET user_token1amount="${userReward}" WHERE user_address = "${user_address}"`,
                function(err,result){    
                    // res.status(200).send(user_token1amount +  (totalGameScore/100)) 
                    res.status(200).json({user_score : totalGameScore, user_token1amount : userReward }) 
                }
            )
        })
    }else{
        userReward = user_token1amount +  (totalGameScore/100)
        console.log("최고점수 갱신 못함")
        console.log(`기존 유저 최고점수 : ${user_score}`)
        console.log(`이번 유저 기록 : ${totalGameScore}`)
        console.log(`기존 유저 토큰 갯수 : ${user_token1amount}`)
        console.log(`토큰 보상 후 갯수 : ${userReward}`)
        
        connection.query(`UPDATE users SET user_token1amount="${userReward}" WHERE user_address = "${user_address}"`,
        function(err,result){    
            // res.status(200).send(user_token1amount +  (totalGameScore/100)) 
            res.status(200).json({user_score : totalGameScore, user_token1amount : userReward }) 
        }
    )

    }
 
    

    


    
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  
})
module.exports = router;