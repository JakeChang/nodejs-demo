const express = require('express');
var cors = require('cors');
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

app.get('/', function (req, res) {
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

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
