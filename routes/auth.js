const express = require('express');
const router = express.Router();
const User = require('../models/users');

const jsonParser = express.json();

router.post('/register', jsonParser, async (req, res, next) => {
    try{
        await User.create(req.body);
        return res.status(201).end();

    } catch(err) {
        next(err);
    }
});

module.exports = router; 