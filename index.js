 const express = require('express');
const { readFile } = require('fs');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    readFile(path.resolve(__dirname, 'home.html'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Some error occurred');
        }
        res.send(data);
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
