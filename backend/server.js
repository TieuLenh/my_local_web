const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})