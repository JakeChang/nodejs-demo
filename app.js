const express = require('express');
const app = express();
const PORT = 3000;

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
