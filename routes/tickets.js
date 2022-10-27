const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create)

module.exports = router;
