const express = require('express');
const app = express();

app.use("/user",(req, res, next)=> {
    console.log("hi welcome express js !!!");
    res.send("<h1>hello User</h1>")
})

app.use("/",(req, res, next)=> {
    console.log("hi welcome kirushanthi !!!");
    res.send("<h1>hello</h1>")
})

app.listen(3060);