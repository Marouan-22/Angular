//#region © 
/*                              _
                           	  /\ \  _  _
   ©   ___    ___   ___   ___ \_\ \\_\\_\
     /',__ \/',__\/',__\/' _ \/' _ \\ \\ \
   	/\  __ /\__, `\__, `\ \_\ \ \ \ \\ \\ \
    \ \____\\____ /\___ /\___,_\___,_\\ \\_\
     \/____//___ /\/___/\/__,_ /_ /\ \_\ \ /
                                  \ \____/
                                   \/___/
*/
//#endregion

//#region // MAIN //
////////////////////
const X = require('express');
const APP = X();
const PORT = process.env.PORT || 2105;
// const CORS = require('cors');
// const BODY = require('body-parser');

APP.use('/', require('./router.js'));
APP.use('/compiled', X.static(__dirname + '/client'));
APP.listen(PORT, () => { console.log(`\n\n\x1b[45m  ====================  \x1b[0m\n\x1b[45m   UCLL NodeJS server   \x1b[0m\n\x1b[45m   ©2k20 ( port${PORT} )   \x1b[0m\n\x1b[45m  ====================  \x1b[0m\n`); }) 
////////////
//#endregion



//#region // SCRATCHPAD //
//////////////////////////
// app.options('/', cors()) // enable pre-flight request // security -> curtail allowed origins
// app.all('*', function(req, res, next) {
	// 	console.log("entering cors");
	//   res.header("Access-Control-Allow-Origin", "*");
	//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
	//   next();
	// });
////////////
//#endregion