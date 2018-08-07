const path = require('path');
const express = require('express');

const app = express();
const base = path.join(__dirname, '..', 'public');

app.use(express.static(base));
const server = app.listen(3000, function() {
    const port = server.address().port;
    const host = server.address().address;
    console.log('App listening at http://%s:%s', host, port);
});
