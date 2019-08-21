const express = require("express");
const PORT = 3000;
const app = express();


// Routes

// Homepage
app.get('/', (req,res,next) => res.sendFile(__dirname + '/views/home.html'));

// About
app.get('/about', (req, res, next) => res.sendFile(__dirname + '/views/about.html'));

// Recipes
app.get('/recipes', (req, res, nex) => res.sendFile(__dirname + '/views/gallery.html'));




app.listen(PORT, () => console.log("This is running :D"));