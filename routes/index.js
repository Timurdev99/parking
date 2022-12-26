const express = require('express');

const park = require('../api/park');
const unpark = require('../api/unpark');
const info = require('../api/info');

const router = express.Router();
router.post('/park', park);
router.post('/unpark', unpark);
router.get('/info/:type/:number', info);

module.exports = router;