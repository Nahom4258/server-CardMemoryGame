const db = require('../db')

const leaderboard = (req, res) => {
    console.log('asking leaderboard')
    db.query(`SELECT id, username, highscore FROM users ORDER BY highscore ASC`, (err, result, fields) => {
        if (err) {
            console.log('leaderboard error')
            res.send(JSON.stringify({ error: 'leaderboard error' }))
            return
        }

        res.send(JSON.stringify(result))
    })
}

module.exports = leaderboard