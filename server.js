const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT
const clientId = process.env.CLIENT_ID;
const cors = require('cors');

const allowedOrigins = ['http://localhost:3000', 'https://iphone14promax.vercel.app'];

// Configure CORS with allowed origins
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.get("/api", (req, res, ) => {
    const clientId = process.env.CLIENT_ID;
    res.json({
        clientId,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`clientId is: ${clientId}`);
});
