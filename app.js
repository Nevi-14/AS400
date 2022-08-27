require("appdynamics").profile({
  controllerHostName: 'lombard202208240941176.saas.appdynamics.com',
  controllerPort: 443,
  
  // If SSL, be sure to enable the next line
  controllerSslEnabled: true,
  accountName: 'lombard202208240941176',
  accountAccessKey: '7hfkv798naai',
  applicationName: 'AS400',
  tierName: 'AS400',
  nodeName: 'process' // The controller will automatically append the node name with a unique number
 });
const express =   require('express'),
      app     =   express();
      require('dotenv').config()    
app.use('/',require('./routes/as400'))

      const PORT  = process.env.PORT || 3000
      app.listen(PORT, () =>{
        console.log('Listening on Port: '+`${PORT || 4000}` );
      })