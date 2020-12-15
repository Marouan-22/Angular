const SQL = require('mysql')

let pool = SQL.createPool({
    connectionLimit: 10,
    host: "da03.24it.be",
    user: "sl001_ict2",
    password: "ict2PASS",
    database: "sl001_ict2"
});
console.log(">>> \x1b[32mDB connection pool established\x1b[0m"); // TODO move message down past splash 

//#region POOL EVENTS
//  ACQUIRE
// The pool will emit an acquire event when a connection is acquired from the pool.
// This is called after all acquiring activity has been performed on the connection, right before the connection is handed to the callback of the acquiring code.
pool.on('acquire', function (connection) { 
    console.log("\x1b[32m> \x1b[30mMySQL connection \x1b[32m%d\x1b[30m acquired\x1b[0m", connection.threadId);
});
//  RELEASE
// The pool will emit a release event when a connection is released back to the pool.
// This is called after all release activity has been performed on the connection, so the connection will be listed as free at the time of the event.
pool.on('release', function (connection) {
    console.log("\x1b[31m> \x1b[30mMySQL connection \x1b[31m%d\x1b[30m released\x1b[0m", connection.threadId);
});
//  CONNECTION
// The pool will emit a connection event when a new connection is made within the pool.
// If you need to set session variables on the connection before it gets used, you can listen to the connection event.
// pool.on('connection', function (connection) {
//     connection.query('SET SESSION auto_increment_increment=1')
// });
//  ENQUEUE
// The pool will emit an enqueue event when a callback has been queued to wait for an available connection.
// pool.on('enqueue', function () {
//     console.log('Waiting for available connection slot');
// });
//#endregion

exports.Q = (callback) => {
    pool.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        callback(err, connection);
        connection.release()
    });
};


/*
exports.AddUser = (login, pass, level) => {
    pool.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        connection.query(`SELECT * FROM ${req.params.arg}`, (err, result, fields) => {
            if (err) { next(err); }
            return result;
        });
        connection.release()
    });
};
connection.query('INSERT INTO posts SET ?', { title: 'test' }, (error, results, fields) => {
    if (error) throw error;
    console.log(results.insertId);
});
connection.query(
    {
        sql: 'SELECT * FROM `books` WHERE `author` = ?',
        timeout: 40000, // 40 seconds
        values: ['David']
    },
    (error, results, fields) => {
        // fields will contain information about the returned results fields (if any)
    }
});
let userId = 1;
let columns = ['username', 'email'];
let query = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userId], (error, results, fields) => {
    if (error) throw error;
    // ...
});
console.log(query.sql); // SELECT `username`, `email` FROM `users` WHERE id = 1
let post = { id: 1, title: 'Hello MySQL' };
let query = connection.query('INSERT INTO posts SET ?', post, (error, results, fields) => {
    if (error) throw error;
    // 
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
*/