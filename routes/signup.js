const db = require('../db')

const verify = (req, res, next) => {
    const { email, username, password } = req.body

    db.query(`SELECT id, username FROM users WHERE email = '${email.value}' OR username = '${username.value}'`, (err, result, fields) => {
        if (err || result.length != 0) {
            res.send(JSON.stringify({ error: 'email/username already in use error' }))
            return
        }

        next()
    })
}

const signup = (req, res) => {
    const { email, username, password } = req.body

    db.query(`INSERT INTO users(username, email, password, highscore) VALUES ('${username.value}','${email.value}','${password.value}', 0)`, (err, result, fields) => {
        if (err) {
            console.log('error adding')
            res.send(JSON.stringify({ error: 'sign up error' }))
            return
        }

        res.send(JSON.stringify(result))
    })
}

module.exports = { verify, signup }