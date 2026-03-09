const express = require('express');
const cors = require('cors');   // <--- add this
const app = express();

app.use(cors());                // <--- and this

const reportRoutes = require('./routes/report');
app.use('/report', reportRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});