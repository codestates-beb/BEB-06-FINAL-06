require("dotenv").config();
const mysql=require("mysql");

// 데이터 베이스 선언 
const connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD
});

connection.connect();   // DB 접속

// JETRIS 라는 DATABASE 생성 : CREATE DATABASE if not exists <DATABASE NAME>
connection.query("CREATE DATABASE if not exists JETRIS", function(err, result){
    if(err) return console.log(err);
    // console.log(result);
    console.log('JETRIS DB 접속');

})
// JETRIS 라는 DATABASE 선택 : USE <DATABASE NAME>
connection.query("USE JETRIS", function(err, result){
    if(err) return console.log(err);
})

// users 라는 테이블 생성 
connection.query("CREATE TABLE if not exists users(user_address varchar(255), user_nickname varchar(255), user_token1amount float, user_token2amount float, user_score integer)", 
function(err, result){
    if(err) return console.log(err);
})
// items 라는 테이블 생성 
connection.query("CREATE TABLE if not exists items(onwer varchar(255), metadata_url varchar(255))", 
function(err, result){
    if(err) return console.log(err);
})
// nfts 라는 테이블 생성 
connection.query("CREATE TABLE if not exists nfts(onwer varchar(255), metadata_url varchar(255))", 
function(err, result){
    if(err) return console.log(err);
})


// connection.end();   // DB 종료
module.exports={connection};

