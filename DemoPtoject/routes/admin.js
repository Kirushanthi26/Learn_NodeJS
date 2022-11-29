const express = require('express');
const router = express.Router();

router.get("/add-product",(req, res, next)=>{
    res.send("<h1>form</h1>")
})

router.post("/add-product",(req, res, next)=>{
    res.send("<h1>form output</h1>")
})

module.exports = router