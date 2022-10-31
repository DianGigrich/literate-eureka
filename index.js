const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Th1s1s1t!',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
);

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).json ({msg: 'oh no!', err:err})
        }
        res.json(results)
    }
    )
});

app.get('/api/reviews', (req, res) => {
    db.query('SELECT movie_name AS Title, review FROM reviews', function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).json ({msg: 'oh no!', err:err})
        }
        res.json(results)
    }
    )
});

app.post('/api/movie', (req, res) => {
    db.query('INSERT INTO movies (name) VALUE (?)', [req.body.name], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).json ({msg: 'oh no!', err:err})
        }
        res.json(results)
    })
});

app.post('/api/review', (req, res) => {
    db.query('INSERT INTO reviews (name) VALUE (?)', [req.body.name], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).json ({msg: 'oh no!', err:err})
        }
        res.json(results)
    })
});

app.delete('/api/review', (req, res) => {
    db.query('DELETE FROM moviess WHERE id=(?)', [req.params.id], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).json ({msg: 'oh no!', err:err})
        }
        if(data.affectedRows===0){
            return res.status(404).json({msg:"no such movie founds!"})
        }
        res.json(results)
    })
});


app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});