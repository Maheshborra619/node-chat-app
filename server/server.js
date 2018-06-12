const path  = require('path');
const express = require('express');
const pathJoin = path.join(__dirname  + '/../public');

var app = express();
app.use(express.static(pathJoin));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server ${port}`);
})
