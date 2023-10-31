const express = require('express');
const mongoose = require("mongoose")
const app = express();
const ejs = require("ejs")
const Post = require("./models/Post");
const { redirect } = require('react-router-dom');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/cleanblog-test-db")

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    const posts = await Post.find({})
    console.log(posts)
    res.render('index',{
        posts
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/add_post', (req, res) => {
    res.render('add_post');
});

app.post('/posts', async (req,res)=>{
    const data = await Post.create(req.body)
    res.redirect("/")
})

const port = 3000;
app.listen(3000, () => console.log('blog server is uppp'));
