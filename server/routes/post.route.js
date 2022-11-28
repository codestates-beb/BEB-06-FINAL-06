// POST 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");

// post 테이블 모두 받기
router.get('/findall', function(req, res){
    connection.query('SELECT * FROM posts ORDER BY id  DESC', function(err, result){
        res.send(result)
    })
})

// 게시글 저장하기
router.post('/postsave', function(req,res){
    console.log(req.body)
    connection.query('INSERT INTO posts(user_address, user_nickname, user_img, post_content, post_image, post_date, post_categorie) VALUES(?,?,?,?,?,?,?)',
    [           
        req.body.user_address,
        req.body.user_nickname,
        req.body.user_img,
        req.body.post_content,
        req.body.post_image,
        req.body.post_date,
        req.body.post_categorie,
    ],
        function (err, result) {
            if(err)
                return console.log(err)
                res.status(200).json({result:result});
        }
    )
  
})
module.exports = router;