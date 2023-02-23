const db = require('../db')

const update_highscore = (req, res) => {
    const { id, highscore } = req.body

    console.log('updating highscore')

    db.query(`UPDATE users SET highscore = ${highscore} WHERE id = ${id}`, (err, result, fields) => {
        if (err) {
            console.log('update highscore error')
            res.send(JSON.stringify({ error: 'highscore update error' }))
            return
        }

        res.send('highscore updated')
    })
}

module.exports = update_highscore