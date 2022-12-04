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
            `SELECT * FROM usernft where onwer = "${user_address}" OR onwer = 'defult_img'`,
            function (err, result) {
                // console.log(result)
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

// 사용자 NFT 구매
router.get('/buy', function(req,res){
    try{
    // console.log(req)
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
    const user_address = data.user_address; // 쿠키에 있는 유저 주소
    const user_token1 = data.user_token1amount
    // const rand = Math.floor(Math.random() * 21);
    const rand =Math.floor(Math.random() * (21 - 1) + 1)
    // 랜덤으로 NFT하나를 선택해서 데이터를 가져온다.
    const NFTPRICE = 100;   // NFT 가격


    connection.query(
        `SELECT * FROM nfts WHERE id = "${rand}"`,
        function (err, result) {
            // console.log(result)
            // console.log(result[0].image_url)
            // 가져온 NFT를  usernft에 넣어준다.
            connection.query(`INSERT INTO usernft(onwer, metadata_url,image_url, nft_name, price) VALUES(?,?,?,?,?)`,
              [
                user_address,
                result[0].image_url,
                result[0].image_url,
                result[0].nft_name,
                result[0].price    
              ] 
            )
            // 유저의 토큰을 차감한다.
            connection.query(`UPDATE users SET user_token1amount ="${user_token1 - NFTPRICE}" WHERE user_address = "${user_address}"`,
            function(err,result){
                console.log(result)
                // res.status(200).send("프로필 변경 완료") 
                }
            )
            res.status(200).send(result)
        }
    )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router;