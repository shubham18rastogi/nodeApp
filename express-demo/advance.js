const startUpDebugger = require('debug')('app:startup');
const config = require('config');
const express = require('express');
const app = express();

//app.set('view engine', 'pug');

//console.log(config.get('name'));
//console.log(config.get('env'));

//startUpDebugger("Debugger");     // set environment variable -> DEBUG=app:startup to see this

app.use(express.json());
//app.use(express.static('public'));

app.use(function(req, resp, next){
    console.log('Middleware 001');
    next();
});

app.use(function(req, resp, next){
    console.log('Middleware 002');
    next();
});

app.get('/', (req, resp) => {
    resp.send('Hello World');
    //resp.render('index', { title: 'My Express App', message: 'Hello There\nYou are awesome!!!'});
});

const port = process.env.PORT || 1995;
app.listen(port, () => {
    console.log(`Listening to Port ${port}...`);
});