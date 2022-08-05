const path = require('path')
const fs = require('fs')
const express = require('express');
const hbs = require('hbs');

//EXPRESS Config
const app = express();
app.set('view engine', 'hbs')


//RENDERING STATIC FILES
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

const viewsPath = path.join(__dirname, './templates/views');
app.set('views', viewsPath);

const partialsPath = path.join(__dirname, './templates/partials');
hbs.registerPartials(partialsPath)



//PORT Config
const port = 4000

//EXPRESS ROUTING
app.get('/', (req, res) => {
    res.render('index');

})

app.get('/lautech', (req, res) => {
    res.render('lautech')
})

app.get('/techarena', (req, res) => {
    res.render('techarena')
})

app.get('/api', (req, res) => {
    res.send({name: 'Naheem', location: 'Nigeria', Religion: 'Islam', Age: 20, color: 'dark'});

})

app.get('*', (req, res) => {
    res.render('<h1>Page not Found<h1>');

})








//EXPRESS LISTEN Port
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})