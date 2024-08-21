const express = require("express");
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const app = express();
const Port = 3000;

let posts = [
    {
        id : uuidv4(),
        username : "demopost",
        content : "Hello users, This is a demo post from quora."
    },
]

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));


// Home Page
app.get("/posts",(req,res) => {
    res.render('home.ejs',{posts});
});

app.get("/posts/new",(req,res) => {
    res.render('newpost.ejs');
});

app.post("/posts", (req,res) => {
    let id = uuidv4();
    let {username,content} = req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    if(post) {
        res.render("show.ejs", {post});
    } else {
        res.render('notfound.ejs');
    }
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    res.redirect('/posts');
});

app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id );
    console.log(posts);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render('edit.ejs',{post});
});

app.listen(Port,() => {
    console.log(`Server is running at http://localhost:3000`);
});

