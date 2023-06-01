const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error("Could not connect to MongoDB"));

module.exports = mongoose;