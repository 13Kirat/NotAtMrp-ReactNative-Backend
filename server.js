require('dotenv').config();
const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/events');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api/events', eventRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});