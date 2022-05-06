const express = require('express');
const app = express();

const PORT = process.env.PORT || 6060;

app.use(express.static(__dirname + '/dist/frontend'));

app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + 'dist/frontend/index.html');
});

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
});