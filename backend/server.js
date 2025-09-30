const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
})

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, './APIs/navbar.json'));
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})