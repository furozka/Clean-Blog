const express = require('express');
const app = express();
const ejs = require("ejs")

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/add_post', (req, res) => {
    res.render('add_post');
});

const port = 3000;
app.listen(3000, () => console.log('blog server is uppp'));
