const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    db.query('SELECT * FROM my_table', (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
