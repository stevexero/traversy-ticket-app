const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
