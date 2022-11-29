const path = require('path');

const express = require('express');
const router = express.Router();

router.get("/add-product",(req, res, next)=>{
    res.sendFile(path.join(__dirname, "..", "views", "add-product.html"))
})

router.post("/add-product",(req, res, next)=>{
    res.send("<h1>form output</h1>")
})

module.exports = router