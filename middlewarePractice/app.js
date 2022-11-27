const express = require("express");
const app = express();

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.use('/',(req, res, next)=>{
    console.log("this is always run!");
    next();
})

app.use('/user',(req, res, next)=>{
    console.log("2st middleware");
    res.send("<h1>hello secound page</h1>")
})

app.use('/',(req, res, next)=>{
    console.log("1st middleware");
    res.send("<h1>hello first page</h1>")
})


/*app.use((req, res, next) => {
   console.log('one middleware')
		next();
});
app.use((req, res, next) => {
    console.log('two middleware');
    res.send('<h1>hi express</h1>');
});*/

app.listen(3060);