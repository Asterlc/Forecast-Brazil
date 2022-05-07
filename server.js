const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 6060;

app.use(express.static(__dirname + '/dist/frontend'));

app.get('/home', function (req, res) {
    res.sendFile(path.join(path.resolve('dist/frontend'), 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
});