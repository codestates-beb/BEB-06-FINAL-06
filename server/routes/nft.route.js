// NFT 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");
const jwt = require('jsonwebtoken');
// nfts 테이블 모두 받기
router.get('/findall', function(req, res){
    connection.query('SELECT * FROM nfts', function(err, result){
        res.send(result)
    })
})

// 사용자의 nft 데이터 받기
router.get('/mynft' , function (req, res) {
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        // const nfts = []
        connection.query(
            `SELECT * FROM nfts where onwer = "${user_address}" OR onwer = 'defult_jmg'`,
            function (err, result) {
                console.log(result)
                res.status(200).send(result) // result 는 데이터베이스에서 나온 유저 정보
                // if (result[0].user_address === data.user_address) {
                    // res.status(200).send(result) // result 는 데이터베이스에서 나온 유저 정보
                    // console.log(payload)
                // }
            }
        )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


// 사용자 NFT 장착
router.post('/mounting', function(req,res){
    try{
    // console.log(req.body)
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
    const user_address = data.user_address; // 쿠키에 있는 유저 주소
    const Change_userimage = req.body.user_img
    console.log(user_address,Change_userimage )
    connection.query(`UPDATE users SET user_img ="${Change_userimage}" WHERE user_address = "${user_address}"`,
    function(err,result){
        console.log(result)
        res.status(200).send("프로필 변경 완료") 
    }
        )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  
})



module.exports = router;