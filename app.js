const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

// app.use('/', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//  res.sendFile(path.join(__dirname+'/frontend/index.html'));     
// });

app.get('/professional', (req, res, next) => {
    
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    res.json({ data: [{
        professionalName: 'Amber',
        base64Image: 'test',
        primaryDescription: '',
        workDescription: '',
        linkTitleText: '',
        linkedInLink: '',
        gitHubLink: ''
    }]});

    next();
});

app.listen(8080);