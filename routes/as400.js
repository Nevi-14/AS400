const  express =  require('express'),
router = express.Router(),
as400Controller = require('../controllers/as400');
require('dotenv').config()  
const apiURL = process.env.prdMode === "true" ?  process.env.prdtURL : process.env.testURL ;
const apiController = process.env.prdMode === "true" ? as400Controller.as400Production : as400Controller.as400Testing ;
console.log('typeof', typeof(process.env.prdMode))
console.log('process.env.prdMode',process.env.prdMode   )
console.log('process.env.apiURL',apiURL   )
router.get( apiURL,apiController )
router.use(as400Controller.as400_404)

module.exports = router