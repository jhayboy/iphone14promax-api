const express = require('express');
const app = express();
require('dotenv').config();

app.get("/api", (req, res) => {
    const clientId = process.env.CLIENT_ID;
    res.json({
        clientId,
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
