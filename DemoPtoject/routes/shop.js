const path = require('path');

const express = require('express');
const router = express.Router();

const adminData = require('./admin.js')

router.get("/",(req, res, next)=>{
console.log(adminData.product);
res.sendFile(path.join(__dirname, "..", "views", "shop.html"))
})

module.exports = router