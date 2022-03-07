const express = require('express'); 
//const port = 400;
const port = process.env.PORT || 400;

const app = express();
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render('index', {
        pageTitle: 'Hello',
        pageBody: 'Hello World!'
    });
});

app.get('/heartbeat', (req, res)=>{
    res.send('HeartBeat!');
});

app.listen(port);