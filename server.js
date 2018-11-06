const express = require('express');
const bodyParser = require('body-parse');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();


app.use(express.static(__dirname + '/public_html'));
hbs.registerPartials(__dirname + '/views/partials');



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});