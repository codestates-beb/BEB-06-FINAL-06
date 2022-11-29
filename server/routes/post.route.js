// POST 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");

// post 테이블 모두 받기
router.get('/findall', function(req, res){
    connection.query('SELECT * FROM posts ORDER BY id DESC', function(err, result){
        // buffer이미지를 문자열로 변경해서 보내준당
        const payload = result.map(e => {
            // console.log(e.post_image.toString())
            e.post_image = e.post_image.toString();
            return e;
        })
        res.send(payload)
        // console.log(payload)

    })
})

// 게시글 저장하기
router.post('/postsave', function(req,res){
    // console.log(req.body)
    connection.query('INSERT INTO posts(user_address, user_nickname, user_img, post_content, post_image, post_date, post_categorie) VALUES(?,?,?,?,?,now(),?)',
    [           
        req.body.user_address,
        req.body.user_nickname,
        req.body.user_img,
        req.body.post_content,
        req.body.post_image,
        req.body.post_categorie,
    ],
        function (err, result) {
            if(err)
                return console.log(err)
                res.status(200).json({result:result});
        }
    )
  
})

// 댓글 저장
router.post('/commentsave', function(req,res){
    console.log(req.body)
    connection.query('INSERT INTO comments(post_id, user_address, user_nickname, user_img, comment_content, comment_date ) VALUES(?,?,?,?,?,now())',
    [           
        req.body.post_id,
        req.body.user_address,
        req.body.user_nickname,
        req.body.user_img,
        req.body.comment_content,
    ],
        function (err, result) {
            if(err)
                return console.log(err)
                res.status(200).json({result:result});
        }
    )
  
})

// 댓글 불러오기
router.post('/comment', function(req, res){
    const post_id = req.body.post_id;
    console.log(req.body)

    connection.query(`SELECT * FROM comments WHERE post_id = " ${post_id}"`, function(err, result){
        res.send(result)
        console.log(result)

    })
})
module.exports = router;