const express = require('express');
const path = require('path');

const app = express();


app.set('view engine','ejs');
    app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res) => {
    // res.send("Trident Labs")
    res.render('home')
})

app.listen(3000, () => {
    console.log("Serving ojn Port 3000 !");
})