const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => { //1
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body); //2
    res.redirect('/');//3
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');//4
});

app.listen(3000);
