const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");

// items 테이블 모두 받기
router.get('/findall', function(req, res){
    connection.query('SELECT * FROM user', function(err, result){
        res.send(result)
    })
})

module.exports = router;