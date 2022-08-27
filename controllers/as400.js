require('dotenv').config()  
const pool = require('../database/connection');
exports.as400Production = async (req, resp)=>{
    callData().then(data =>{
      //  console.log(data, 'queyryy')
        resp.send(data);
    })
 
};

exports.as400Testing =   (req, resp)=>{
    callData().then(data =>{
        resp.send(data);
    })

};


async function callData(){
    let time = new Date();
    const usuarios = await pool.query('SELECT  * FROM  AS400 ');
    //console.log(typeof(usuarios))
   
    return usuarios;
  

}


exports.as400_404 = (req, resp)=>{
    
    resp.send('Not Found, the correct api should be '+`${process.env.prdMode === "true" ?  process.env.prdtURL : process.env.testURL}`);
};
