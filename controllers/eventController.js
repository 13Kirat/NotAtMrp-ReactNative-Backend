const events = [
  {
    "id": 1,
    "title": "Tech Conference 2025",
    "description": "An annual conference bringing together the brightest minds in technology.",
    "date": "2025-11-15",
    "time": "09:00",
    "venue": "Metro Convention Centre",
    "location": "New York, NY",
    "category": "Technology",
    "price": 199.99,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "Tech Events Inc.",
    "availableSeats": 500
  },
  {
    "id": 2,
    "title": "Indie Music Fest",
    "description": "A weekend-long festival featuring the best up-and-coming indie bands.",
    "date": "2025-08-22",
    "time": "12:00",
    "venue": "Green Park",
    "location": "London, UK",
    "category": "Music",
    "price": 75.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "SoundWave Productions",
    "availableSeats": 2000
  },
  {
    "id": 3,
    "title": "Modern Art Exhibition",
    "description": "A curated exhibition of modern art from around the world.",
    "date": "2025-09-05",
    "time": "10:00",
    "venue": "The Modern Art Gallery",
    "location": "Paris, FR",
    "category": "Art",
    "price": 25.50,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "Art Collective",
    "availableSeats": 300
  },
  {
    "id": 4,
    "title": "Gourmet Food Fair",
    "description": "Taste the finest foods from local and international chefs.",
    "date": "2025-10-18",
    "time": "11:00",
    "venue": "City Market",
    "location": "San Francisco, CA",
    "category": "Food & Drink",
    "price": 40.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "TasteMakers",
    "availableSeats": 800
  },
  {
    "id": 5,
    "title": "Stand-Up Comedy Night",
    "description": "A night of laughter with the city's best comedians.",
    "date": "2025-11-01",
    "time": "20:00",
    "venue": "The Laugh Factory",
    "location": "Chicago, IL",
    "category": "Comedy",
    "price": 30.00,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "Comedy Central",
    "availableSeats": 150
  },
  {
    "id": 6,
    "title": "Startup Pitch Competition",
    "description": "Entrepreneurs pitch their ideas to a panel of venture capitalists.",
    "date": "2025-11-20",
    "time": "14:00",
    "venue": "Innovation Hub",
    "location": "Austin, TX",
    "category": "Business",
    "price": 50.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "VC Connect",
    "availableSeats": 200
  },
  {
    "id": 7,
    "title": "Yoga and Wellness Retreat",
    "description": "A weekend of yoga, meditation, and healthy living.",
    "date": "2025-09-26",
    "time": "18:00",
    "venue": "Serenity Lodge",
    "location": "Asheville, NC",
    "category": "Wellness",
    "price": 350.00,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "ZenLife",
    "availableSeats": 50
  },
  {
    "id": 8,
    "title": "Salsa Dance Workshop",
    "description": "Learn the basics of salsa dancing from professional instructors.",
    "date": "2025-10-11",
    "time": "19:00",
    "venue": "Rhythm Dance Studio",
    "location": "Miami, FL",
    "category": "Dance",
    "price": 45.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "Dance Masters",
    "availableSeats": 40
  },
  {
    "id": 9,
    "title": "Family Fun Day",
    "description": "A day of games, activities, and entertainment for the whole family.",
    "date": "2025-08-30",
    "time": "10:00",
    "venue": "Community Park",
    "location": "Orlando, FL",
    "category": "Family",
    "price": 15.00,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "City Events",
    "availableSeats": 1000
  },
  {
    "id": 10,
    "title": "Marathon 2025",
    "description": "The annual city marathon. Run for a cause!",
    "date": "2025-10-05",
    "time": "07:00",
    "venue": "City Streets",
    "location": "Boston, MA",
    "category": "Sports",
    "price": 60.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "Runners Association",
    "availableSeats": 5000
  },
  {
    "id": 11,
    "title": "Web Development Bootcamp",
    "description": "An intensive workshop on modern web development technologies.",
    "date": "2025-11-08",
    "time": "09:00",
    "venue": "Code Academy",
    "location": "Online",
    "category": "Workshop",
    "price": 499.00,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "DevSkills",
    "availableSeats": 100
  },
  {
    "id": 12,
    "title": "Classical Music Concert",
    "description": "An evening with the Philharmonic Orchestra.",
    "date": "2025-12-05",
    "time": "19:30",
    "venue": "Symphony Hall",
    "location": "Vienna, AT",
    "category": "Music",
    "price": 120.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "Vienna Philharmonic",
    "availableSeats": 1200
  },
  {
    "id": 13,
    "title": "AI in Practice",
    "description": "A deep dive into practical applications of Artificial Intelligence.",
    "date": "2025-11-18",
    "time": "10:00",
    "venue": "Tech Park Auditorium",
    "location": "San Francisco, CA",
    "category": "Technology",
    "price": 250.00,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "AI Forward",
    "availableSeats": 400
  },
  {
    "id": 14,
    "title": "Wine Tasting Tour",
    "description": "Explore the finest wineries and taste exquisite wines.",
    "date": "2025-09-13",
    "time": "11:00",
    "venue": "Napa Valley",
    "location": "Napa, CA",
    "category": "Food & Drink",
    "price": 95.00,
    "posterUrl": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "organizer": "Vineyard Tours",
    "availableSeats": 60
  },
  {
    "id": 15,
    "title": "Photography Masterclass",
    "description": "Learn the art of photography from a world-renowned photographer.",
    "date": "2025-10-25",
    "time": "09:00",
    "venue": "The Studio",
    "location": "New York, NY",
    "category": "Workshop",
    "price": 200.00,
    "posterUrl": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "organizer": "Shutterbug Academy",
    "availableSeats": 75
  }
]

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
