require("appdynamics").profile({
    controllerHostName: 'lombard202208240941176.saas.appdynamics.com',
    controllerPort: 443,
    
    // If SSL, be sure to enable the next line
    controllerSslEnabled: true,
    accountName: 'lombard202208240941176',
    accountAccessKey: '7hfkv798naai',
    applicationName: 'TEST_LOCAL',
    tierName: 'TEST_LOCAL',
    nodeName: 'process' // The controller will automatically append the node name with a unique number
   });
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
