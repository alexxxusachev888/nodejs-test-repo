require('dotenv').config();

const express = require('express');
const app = express();

require('./db');

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});