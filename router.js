const X = require('express');
const GO = X.Router();
const CORS = require('cors');
const { PREP, log, DB } = require('./middleware.js');
const { Q } = require('./db.js');
const BODY = require('body-parser');

// GO.all('*', (req, res, next) => { //TODO remove before deploy
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//     next();
// });


GO.route('/poke').get((req, res) => {
    let t = Date();
    res.send(
        `${t} ::: checking for signs of life`
    );
})

GO.route('/test').get(CORS(),log(),(req, res) => {
    console.log("access...")
    res.send({response:"Hello all"})
})

GO.route('/naam/:eigennaam?').get(log(), (req, res) => {
    res.send(`Hallo ${req.params.eigennaam}`)
});
GO.route('/post').post((req, res) => {
    res.send('Hello post')
});

GO.route('/query/all').get((req, res, next) => {
    Q(
        (error, connection) => {
            if (error) throw error;
            connection.query(`SELECT * FROM questions`, (err, result, fields) => { // ${req.params.arg}`, (err, result, fields) => {
                if (err) { next(err); }
                // console.log(result)
                res.send(
                    result
                );
            });
        }
    )
});


GO.route('/adduser').all(CORS(), BODY.json(),(req, res, next) => {
    Q(
        (error, connection) => {
            if (error) throw error;
            connection.query(`INSERT INTO users (user_first,user_last) 
            VALUES ('${req.body.first}', '${req.body.last}') 
            ON DUPLICATE KEY UPDATE user_first = VALUES(user_first), user_last = VALUES(user_last)`, (err, result, fields) => { // ${req.params.arg}`, (err, result, fields) => {
                if (err) { next(err); }
                // console.log(result)
                res.send(
                    result
                );
            });
        }
    )
});
module.exports = GO;