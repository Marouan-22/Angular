//#region // SQL //
///////////////////
// const { DB } = require('./db.js');
////////////
//#endregion

//#region // PRE-PROCESS //
///////////////////
// exports.buffer = (req, res, next) => {
//     req.pass = Buffer.from(req.body.pass.toString(), 'binary').toString('base64')
//     next()
// }
////////////
//#endregion

//#region // LOG //
///////////////////
exports.log = () => {
    return (req, res, next) => {
        console.log(req.query.boenk)
        next()
    }
}


////////////
//#endregion

//#region // AUTHENTICATE //
///////////////////
exports.test = (req, res, next) => {
    if (req.headers.authorization !== 'Basic QXp1cmEEaWFb25kOmh5bnRlcjI=') {
        res.set('WWW-Authenticate', 'Basic realm="401"')
        res.status(401).send('Authentication failed')
        return
    } else res.send(req.headers.authorization)
    if (req.pass == "Let me in !!!") {
        next();
    }
    // res.redirect('/');
}
////////////
//#endregion


// if (req.headers['content-type'] !== 'application/json') {
//     res.status(400).send('Server requires application/json')
// } else {
//     next()