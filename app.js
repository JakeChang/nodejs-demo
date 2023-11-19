const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: [
        'http://localhost:8080',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(express.static('public'));
app.use(express.json());

app.get('/test_get', function (req, res) {
    let data = {
        status: 0,
        data: {
            name: 'JK',
            email: 'xxx@xxx.xxx',

        }
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
})

app.post('/test_post', function (req, res) {
    const name = req.body.name;
    let data = {
        status: 0,
        data: {
            name: name,

        }
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
})

app.get('/test_data', function (req, res) {
    const host = req.headers.host;

    let data = {
        status: 0,
        data: {
            image: 'https://' + host + '/jk.png',
            audio: 'https://' + host + '/jk.wav',
            video: 'https://' + host + '/jk.mov',
        }
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
