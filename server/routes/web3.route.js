// WEB3 관련 라우터

const router = require('express').Router();
const {connection} = require('../connect/db.js')   
const mysql=require("mysql");
const Web3 = require('web3')

function getWeb3() { 
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    return web3;
}

async function getAccounts() {
    try {
        const accounts = await getWeb3().eth.getAccounts(); 
        console.log(accounts);
        return accounts;
    } catch (e) {
        console.log(e);
        return e;
    }
}



// 지갑 주소 받기
router.get('/', function(req, res){
    getAccounts().then((accounts) =>{
        res.send(accounts)
    })
})


module.exports = router;