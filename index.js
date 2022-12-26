const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./routes');
const ipMiddleware = require('./middleware/ip_middleware');

const app = express();
const port = process.env.PORT | 3000;

global.parking_lot = [];
for (let i = 0; i < process.env.PARKING_LOT_SIZE; i++) {
    parking_lot.push({slot: i.toString(), car: ''});
}

global.user_log = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(ipMiddleware);
app.use('/api', api);

app.listen(port, () => {
    console.log(`Server is starting at port ${port}.`);
});