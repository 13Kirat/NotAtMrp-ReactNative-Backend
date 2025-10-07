const events = require('../data/events.json');

const getAllEvents = (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    if (page < 1 || limit < 1) {
      return res.status(400).json({ success: false, message: 'Page and limit must be positive integers.' });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalEvents = events.length;
    const totalPages = Math.ceil(totalEvents / limit);

    const paginatedEvents = events.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedEvents,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalEvents: totalEvents,
        eventsPerPage: limit,
      },
    });
  } catch (error) {
    next(error);
  }
};

const searchEvents = (req, res, next) => {
  try {
    const { q, category, location, minPrice, maxPrice } = req.query;
    let filteredEvents = [...events];

    if (q) {
      const searchTerm = q.toLowerCase();
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm)
      );
    }

    if (category) {
      filteredEvents = filteredEvents.filter(
        (event) => event.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (location) {
      filteredEvents = filteredEvents.filter(
        (event) => event.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (!isNaN(min)) {
        filteredEvents = filteredEvents.filter((event) => event.price >= min);
    }

    if (!isNaN(max)) {
        filteredEvents = filteredEvents.filter((event) => event.price <= max);
    }

    res.json({ success: true, events: filteredEvents, count: filteredEvents.length });
  } catch (error) {
    next(error);
  }
};

const getEventById = (req, res, next) => {
  try {
    const eventId = parseInt(req.params.id, 10);
    if (isNaN(eventId)) {
        return res.status(400).json({ success: false, message: 'Invalid event ID.' });
    }

    const event = events.find((e) => e.id === eventId);

    if (event) {
      res.json({ success: true, event });
    } else {
      res.status(404).json({ success: false, message: 'Event not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEvents,
  searchEvents,
  getEventById,
};
