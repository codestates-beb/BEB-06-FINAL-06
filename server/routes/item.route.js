// 아이템 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");
const jwt = require('jsonwebtoken');
// items 테이블 모두 받기
router.get('/findall', function(req, res){
    connection.query('SELECT * FROM items', function(err, result){
        res.send(result)
        // console.log(result)
    })
})


// 사용자의 아이템 데이터 받기
router.get('/myitem' , function (req, res) {
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        // const nfts = []
        connection.query(
            `SELECT * FROM useritem where onwer = "${user_address}"`,
            function (err, result) {
                console.log(result)
                res.status(200).send(result) // result 는 데이터베이스에서 나온 유저 정보
            }
        )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


// 사용자 아이템 구매
router.get('/buy', function(req,res){
    try{
    // console.log(req)
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
    const user_address = data.user_address; // 쿠키에 있는 유저 주소
    const user_token1 = data.user_token1amount
    const rand =Math.floor(Math.random() * (39 - 1) + 1)
    // 랜덤으로 NFT하나를 선택해서 데이터를 가져온다.
    const ITEMPRICE = 10;   // NFT 가격
    connection.query(
        `SELECT * FROM items WHERE id = "${rand}"`,
        function (err, result) {
            // console.log(result)
            // console.log(result[0].image_url)
            // 가져온 NFT를  usernft에 넣어준다.
            connection.query(`INSERT INTO useritem(onwer, metadata_url,image_url, item_name, price, rating) VALUES(?,?,?,?,?,?)`,
              [
                user_address,
                result[0].image_url,
                result[0].image_url,
                result[0].item_name,
                result[0].price,
                result[0].rating    
              ] 
            )
            // // 유저의 토큰을 차감한다.
            connection.query(`UPDATE users SET user_token1amount ="${user_token1 - ITEMPRICE}" WHERE user_address = "${user_address}"`,
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


// 사용자 아이템 장착
router.post('/mounting', function(req,res){
    try{
    // console.log(req.body)
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
    const user_address = data.user_address; // 쿠키에 있는 유저 주소
    const Change_itemImage = req.body.item_img;
    const Change_itemRating = req.body.rating;
    // console.log(Change_itemImage, Change_itemRating);

    connection.query(`UPDATE users SET item_img ="${Change_itemImage}",rating ="${Change_itemRating}"  WHERE user_address = "${user_address}"`,
    function(err,result){
        console.log(result)
        res.status(200).send("아이템 장착 완료") 
        }
    )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
  
})
module.exports = router;