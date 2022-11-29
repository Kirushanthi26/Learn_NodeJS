const path = require('path');

const express = require('express');
const app = express();

const shopRoute = require('./routes/shop.js');
const adminRoute = require('./routes/admin.js');

app.use(adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3060);