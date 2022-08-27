
require('dotenv').config()  
const pool = require('../database/connection');
exports.as400Production = (req, resp)=>{
    callData();
    resp.send('production');
};

exports.as400Testing =   (req, resp)=>{

    callData();
    resp.send('test');
};


async function callData(){
    let time = new Date();
    const usuarios = await pool.query('SELECT  * FROM  users ');
    console.log('printing data ' + time.toLocaleTimeString())
    data = usuarios;
      console.log(usuarios)
  

}


exports.as400_404 = (req, resp)=>{
    
    resp.send('Not Found, the correct api should be '+`${process.env.prdMode === "true" ?  process.env.prdtURL : process.env.testURL}`);
};
