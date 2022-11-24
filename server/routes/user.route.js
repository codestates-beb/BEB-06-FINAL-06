// 유저 관련된 라우터
const router = require('express').Router();

const {connection} = require('../connect/db.js')   
const mysql=require("mysql");
const jwt = require('jsonwebtoken');

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
            console.log(result.length);
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

    // 유저 로그인

    router.post('/login', function(req, res){
        const user_address = req.body.user_address;
        console.log(user_address)

        connection.query(`SELECT * FROM users where user_address = "${user_address}"`, function(err, result){
            if(err) return console.log(err);
            console.log(result.length);

            if(result.length){
                //로그인 성공 시 해당 주소값을 가진 유저의 데이터를 불러옴
                connection.query(`SELECT id, user_address, user_nickname, user_token1amount, user_token2amount, user_score, user_img FROM users WHERE user_address = "${user_address}"`, function(err, result){        
                console.log(result)

                const payload={
                    id : result[0].id, 
                    user_address : result[0].user_address,  
                    user_nickname : result[0].user_nickname, 
                    user_token1amount : result[0].user_token1amount, 
                    user_token2amount : result[0].user_token2amount, 
                    user_score : result[0].user_score, 
                    user_img : result[0].user_img, 
                }
                // access Token, refresh Token 발급
                const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {expiresIn :'1m', issuer : 'About tech'});
                const refreshToken = jwt.sign(payload, process.env.REFRECH_SECRET, {expiresIn :'10m', issuer : 'About tech'});
                res.cookie('accessToken',accessToken,{secure : false, httpOnly : true}) ;
                res.cookie('refreshToken',refreshToken,{secure : false, httpOnly : true}) ;
                
                
                
                res.status(200).send("로그인 요청 성공");
                
                // access Token 발급
                //  const accessToken = jwt.sign({
                //     id : result[0].id, 
                //     user_address : result[0].user_address,  
                //     user_nickname : result[0].user_nickname, 
                //     user_token1amount : result[0].user_token1amount, 
                //     user_token2amount : result[0].user_token2amount, 
                //     user_score : result[0].user_score, 
                //     user_img : result[0].user_img, 
                // },process.env.ACCESS_SECRET, {
                //     expiresIn :'1m',
                //     issuer : 'About tech',
                // });
                // refresh Token 발급
                // const refreshToken = jwt.sign({
                //     id : result[0].id, 
                //     user_address : result[0].user_address,  
                //     user_nickname : result[0].user_nickname, 
                //     user_token1amount : result[0].user_token1amount, 
                //     user_token2amount : result[0].user_token2amount, 
                //     user_score : result[0].user_score, 
                //     user_img : result[0].user_img, 

                // }, process.env.REFRECH_SECRET, {
                //     expiresIn :'10m',
                //     issuer : 'About tech',
                // });
                //token 전송
                // res.cookie("accessToken", accessToken, {
                //     secure : false,
                //     httpOnly : true,
                // });
                // res.cookie("refreshToken", refreshToken, {
                //     secure : false,
                //     httpOnly : true,
                // });
                
            })
            }else{
                res.status(400).send("등록된 계정이 없습니다. 회원가입을 진행해 주세요");
            }
        })
    })

    // 유저 accessToken 
    // router.post('/signup', function(req, res){
        
    // })
    // 유저 refreshToken

    // 로그아웃

module.exports = router;