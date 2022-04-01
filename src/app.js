const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// Public Static Path
const static_Path = path.join(__dirname, '../public');
const template_Path = path.join(__dirname, '../templates/views');
const partials_Path = path.join(__dirname, '../templates/partials');

app.set('view engine','hbs')
app.set('views',template_Path)
hbs.registerPartials(partials_Path)

app.use(express.static(static_Path));

// Routing
// app.get(route,callback)
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.render('404error',{
        errmsg:'Oops! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});