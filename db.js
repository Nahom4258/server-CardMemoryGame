// get the client
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cardmemorygame',
    password: ''
});

db.connect((err) => {
    if (err) {
        console.log('error')
        return
    }

    console.log('connected to db')
})

module.exports = db