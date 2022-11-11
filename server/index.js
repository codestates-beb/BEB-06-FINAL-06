const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use('/', router);

const PORT = process.env.PORT;

const connection = mysql.createConnection({
    host : 'localhost',
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD
});

connection.connect();

connection.query("CREATE DATABASE if not exists JETRIS", function(err, result){
    if(err) return console.log(err);
    console.log(result);
})

connection.query("USE JETRIS", function(err, result){
    if(err) return console.log(err);
})

connection.query("CREATE TABLE if not exists user(user_address varchar(255), user_nickname varchar(255))", 
function(err, result){
    if(err) return console.log(err);
})

router.post('/register', function(req, res){
    const address = req.body.user_address;
    const nickname = req.body.user_nickname;
    connection.query(`SELECT * FROM user where user_address = "${address}"`, [address], function(err, result){
        if(err) return console.log(err);
        console.log(result);
        if(result.length){
            res.status(400).json({message: "address is exist"});
        }else{
            connection.query('INSERT INTO user(user_address, user_nickname) VALUES(?, ?)', [address, nickname], function(err, result){
                if(err) return console.log(err)
                console.log(result)
                res.status(200).json({result: result});
            })
        }
    })
})

app.listen(PORT, function(){
    console.log(`listening on ${PORT}`);
})
