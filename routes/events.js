const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  searchEvents,
  getEventById,
} = require('../controllers/eventController');

router.get('/', getAllEvents);
router.get('/search', searchEvents);
router.get('/:id', getEventById);

module.exports = router;
