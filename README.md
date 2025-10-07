# Event Listing API Backend

This is a complete Node.js and Express backend for an Event Listing API. It provides endpoints to fetch, search, and retrieve event details.

## Project Structure

```
backend/
├── server.js           # Main server entry point
├── routes/
│   └── events.js       # API route definitions
├── controllers/
│   └── eventController.js # API logic (pagination, search, etc.)
├── middleware/
│   └── errorHandler.js   # Centralized error handler
├── data/
│   └── events.json       # Local data source for events
├── package.json        # Project metadata and dependencies
├── .env                # Environment variables
└── README.md           # This file
```

## Setup and Installation

1.  **Clone the repository** (or download the files).

2.  **Navigate to the backend directory**:
    ```sh
    cd backend
    ```

3.  **Install dependencies**:
    Make sure you have Node.js and npm installed. Run the following command to install the required packages listed in `package.json`.
    ```sh
    npm install
    ```

## Running the Server

You can run the server in two modes:

1.  **Development Mode**:
    Uses `nodemon` to automatically restart the server on file changes.
    ```sh
    npm run dev
    ```

2.  **Production Mode**:
    Runs the server with `node`.
    ```sh
    npm start
    ```

The server will start on `http://localhost:3000`.

## API Usage

### 1. Get All Events

Retrieves a paginated list of all events.

-   **Endpoint**: `GET /api/events`
-   **Query Parameters**:
    -   `page` (optional, number): The page number to retrieve. Default: `1`.
    -   `limit` (optional, number): The number of events per page. Default: `10`.
-   **Success Response (200 OK)**:

    ```json
    {
      "success": true,
      "events": [
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
          "posterUrl": "https://example.com/posters/tech_conference.png",
          "organizer": "Tech Events Inc.",
          "availableSeats": 500
        }
      ],
      "pagination": {
        "currentPage": 1,
        "totalPages": 2,
        "totalEvents": 15,
        "eventsPerPage": 10
      }
    }
    ```

### 2. Search and Filter Events

Retrieves a list of events based on search criteria.

-   **Endpoint**: `GET /api/events/search`
-   **Query Parameters**:
    -   `q` (optional, string): Search text to match in the event `title` and `description`.
    -   `category` (optional, string): Filter by a specific category (e.g., `Music`, `Technology`).
    -   `location` (optional, string): Filter by location (partial match).
    -   `minPrice` (optional, number): The minimum price for events.
    -   `maxPrice` (optional, number): The maximum price for events.
-   **Success Response (200 OK)**:

    ```json
    {
        "success": true,
        "events": [
            {
                "id": 13,
                "title": "AI in Practice",
                "description": "A deep dive into practical applications of Artificial Intelligence.",
                "date": "2025-11-18",
                "time": "10:00",
                "venue": "Tech Park Auditorium",
                "location": "San Francisco, CA",
                "category": "Technology",
                "price": 250,
                "posterUrl": "https://example.com/posters/ai_in_practice.png",
                "organizer": "AI Forward",
                "availableSeats": 400
            }
        ],
        "count": 1
    }
    ```

### 3. Get Event by ID

Retrieves details for a single event by its unique ID.

-   **Endpoint**: `GET /api/events/:id`
-   **URL Parameter**:
    -   `id` (required, number): The unique identifier of the event.
-   **Success Response (200 OK)**:

    ```json
    {
      "success": true,
      "event": {
        "id": 1,
        "title": "Tech Conference 2025",
        "description": "An annual conference bringing together the brightest minds in technology.",
        "date": "2025-11-15",
        "time": "09:00",
        "venue": "Metro Convention Centre",
        "location": "New York, NY",
        "category": "Technology",
        "price": 199.99,
        "posterUrl": "https://example.com/posters/tech_conference.png",
        "organizer": "Tech Events Inc.",
        "availableSeats": 500
      }
    }
    ```
-   **Error Response (404 Not Found)**:

    ```json
    {
      "success": false,
      "message": "Event not found"
    }
    ```

### Error Handling

-   **400 Bad Request**: Returned for invalid query parameters (e.g., non-integer `page` or `limit`).
-   **404 Not Found**: Returned when an event with the specified ID does not exist.
-   **500 Internal Server Error**: Returned for any other server-side errors.
