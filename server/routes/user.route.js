// 유저 관련된 라우터


const router = require('express').Router();

const {connection} = require('../connect/db.js')
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

// 유저 테이블 모두 받기
router.get('/findall', function (req, res) {
    connection.query('SELECT * FROM users', function (err, result) {
        res.send(result)
    })
})

// 유저 회원가입
router.post('/signup', function (req, res) {
    const address = req.body.user_address;
    const nickname = req.body.user_nickname;
    const profileimg = req.body.user_img
    const token1amount = 0;
    const token2amount = 0;
    const score = 0;
    console.log(req.body)
    console.log(profileimg)
    connection.query(
        `SELECT * FROM users where user_address = "${address}"`,
        [address],
        function (err, result) {
            if (err) 
                return console.log(err);

            if (result.length) {
                // res.status(400).json({message: "address is exist"});
                res
                    .status(400)
                    .send("이미 가입된 지갑 주소 입니다.");
            } else {
                connection.query(
                    'INSERT INTO users(user_address, user_nickname, user_token1amount, user_token2a' +
                            'mount, user_score, user_img, jttsteaking) VALUES(?,?,?,?,?,?,0)',
                    [
                        address,
                        nickname,
                        token1amount,
                        token2amount,
                        score,
                        profileimg,


                    ],
                    function (err, result) {
                        if (err) 
                            return console.log(err)
                            // console.log(result)
                        res
                            .status(200)
                            .json({result: result});
                    }
                )
            }
        }
    )
})

// 유저 로그인
router.post('/login', function (req, res) {
    const user_address = req.body.user_address;
    // console.log(req)

    connection.query(
        `SELECT * FROM users where user_address = "${user_address}"`,
        function (err, result) {
            if (err) 
                return console.log(err);
            console.log(result.length);

            if (result.length) {
                //로그인 성공 시 해당 주소값을 가진 유저의 데이터를 불러옴
                connection.query(
                    `SELECT id, user_address, user_nickname, user_token1amount, user_token2amount, user_score, user_img, item_img, rating, jttsteaking FROM users WHERE user_address = "${user_address}"`,
                    function (err, result) {
                        console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
                        console.log(result)

                        const payload = {
                            id: result[0].id,
                            user_address: result[0].user_address,
                            user_nickname: result[0].user_nickname,
                            user_token1amount: result[0].user_token1amount,
                            user_token2amount: result[0].user_token2amount,
                            user_score: result[0].user_score,
                            user_img: result[0].user_img,
                            item_img: result[0].item_img,
                            rating: result[0].rating,
                            jttsteaking: result[0].jttsteaking
                        }

                        // access Token, refresh Token 발급
                        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
                            expiresIn: '24h',
                            issuer: 'About tech'
                        });
                        const refreshToken = jwt.sign(payload, process.env.REFRECH_SECRET, {
                            expiresIn: '24h',
                            issuer: 'About tech'
                        });
                        res.cookie('accessToken', accessToken, {
                            secure: false,
                            httpOnly: true
                        });
                        res.cookie('refreshToken', refreshToken, {
                            secure: false,
                            httpOnly: true
                        });

                        res
                            .status(200)
                            .send(payload);


                    }
                )
            } else {
                res
                    .status(400)
                    .send("등록된 계정이 없습니다. 회원가입을 진행해 주세요");
            }
        }
    )
})

// 유저 로그아웃
router.get('/logout', function (req, res) {
    try {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).send("로그아웃 되었습니다.");
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})

// 유저 accessToken 발급
router.get('/accessToken', function (req, res) {
    try {
        const token = req.cookies.accessToken; // 토큰 벨류 저장
        const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        // onsole.log(data) 해당 쿠키값에있는 유저 정보가 우리 데이터 베이스에 존재할 경우 다시 유저 정보를 전달해 줌
        connection.query(
            `SELECT * FROM users where user_address = "${user_address}"`,
            function (err, result) {
                if (result[0].user_address === data.user_address) {
                    res.status(200).send(result) // result 는 데이터베이스에서 나온 유저 정보
                }
            }
        )
    } catch (err) {
        res.status(500).send(err)
    }

})
// 유저 refreshToken 발급
router.get('/refreshToken', function (req, res) {
    try {
        const token = req.cookies.refreshToken; // 토큰 벨류 저장
        const data = jwt.verify(token, process.env.REFRECH_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        // refreshToken에 들어있는 유저정보와 데이터 베이스에 들어있는 유저정보가 일치한다면 유저정보를 갱신하여 다시 accessToken을
        // 발급해준다.
        connection.query(
            `SELECT * FROM users where user_address = "${user_address}"`,
            function (err, result) {
                if (result[0].user_address === data.user_address) {

                    // access token 재발급
                    const payload = {
                        id: result[0].id,
                        user_address: result[0].user_address,
                        user_nickname: result[0].user_nickname,
                        user_token1amount: result[0].user_token1amount,
                        user_token2amount: result[0].user_token2amount,
                        user_score: result[0].user_score,
                        user_img: result[0].user_img
                    }
                    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
                        expiresIn: '1m',
                        issuer: 'About tech'
                    });
                    res.cookie('accessToken', accessToken, {
                        secure: false,
                        httpOnly: true
                    });
                    res
                        .status(200)
                        .send("accessToken이 재발급 되었습니다")
                    console.log("토큰 재발급완료")
                }
            }
        )

    } catch (err) {
        res
            .status(500)
            .send(err)
    }
})
// 유저 로그인 상태 확인
// router.get('/success' , function (req, res) {
//     try{
//         const token = req.cookies.accessToken;
//         const data = jwt.verify(token, process.env.ACCESS_SECRET); // Jwt 토큰을 암호화 해독함
//         const user_address = data.user_address; // 쿠키에 있는 유저 주소
//         connection.query(
//             `SELECT * FROM users where user_address = "${user_address}"`,
//             function (err, result) {
//                 if (result[0].user_address === data.user_address) {
//                     res.status(200).send(result) // result 는 데이터베이스에서 나온 유저 정보
//                 }
//             }
//         )
//     }catch(err){
//         console.log(err)
//         res.status(500).send(err)
//     }

// })

// 리프래시 토큰으로 로그인 상태 유지 
router.get('/success' , function (req, res) {
    try{
        const token = req.cookies.refreshToken;
        const data = jwt.verify(token, process.env.REFRECH_SECRET); // Jwt 토큰을 암호화 해독함
        const user_address = data.user_address; // 쿠키에 있는 유저 주소
        connection.query(
            `SELECT * FROM users where user_address = "${user_address}"`,
            function (err, result) {
                if (result[0].user_address === data.user_address) {
                    // access token 재발급
                    const payload = {
                        id: result[0].id,
                        user_address: result[0].user_address,
                        user_nickname: result[0].user_nickname,
                        user_token1amount: result[0].user_token1amount,
                        user_token2amount: result[0].user_token2amount,
                        user_score: result[0].user_score,
                        user_img: result[0].user_img
                    }
                    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
                        expiresIn: '1m',
                        issuer: 'About tech'
                    });
                    res.cookie('accessToken', accessToken, {
                        secure: false,
                        httpOnly: true
                    });
                    // res
                    //     .status(200)
                    //     .send("accessToken이 재발급 되었습니다")
                    
                    res.status(200).send(payload) // result 는 데이터베이스에서 나온 유저 정보
                    // console.log(payload)
                }
            }
        )
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

module.exports = router;