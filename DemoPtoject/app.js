
const express = require('express');
const app = express();

const shopRoute = require('./routes/shop.js');
const adminRoute = require('./routes/admin.js');

app.use(adminRoute);
app.use(shopRoute);

app.listen(3060);