// Load node modules
var express = require('express');
const ejs = require('ejs');

// Initialize Express
var app = express();

// Render static files
app.use(express.static('public'));

// Set the ejs engine 
app.set('view engine', 'ejs');

// Port website will run on
app.listen(8080);
console.log('started listening at port 8080');

// *** GET Routes - display pages ***
// Root Route
app.get('/', (req, res) => {
    res.redirect('index');
});

app.get('/index', (req, res) => {
    var name = "Panduranga";
    var listnames = ["Shiva", "Rama", "Krishna"];
    // Render index page
    res.render('pages/index', {
        // EJS variable and server-side variable
        name: name,
        listnames: listnames
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});