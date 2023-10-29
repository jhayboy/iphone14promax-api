const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT

app.get("/api", (req, res) => {
    const clientId = process.env.CLIENT_ID;
    res.json({
        clientId,
    });
});

app.listen(port, () => {
    console.log("Server is running on port 5000");
});
