const db = require('../db')

const login = (req, res) => {
    const { email, password } = req.body
    console.log('em: ', email, 'and', password)


    db.query(`SELECT id, username FROM users WHERE email = '${email.value}' and password = '${password.value}'`, (err, result, fields) => {
        if (err) {
            console.log('username error')
            res.send(JSON.stringify({ error: 'login error' }))
        }

        res.send(JSON.stringify(result.length == 0 ? { error: 'user not found' } : result))
    })
}

module.exports = login