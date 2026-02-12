// server.js
const express = require('express');
const app = express();

app.use(express.json()); // allows JSON messages

// Chat endpoint
app.post('/message', (req, res) => {
    const userMessage = req.body.message; // get message from frontend
    console.log("User said:", userMessage);

    // For now, bot just echoes the message
    const botReply = "You said: " + userMessage;
    res.json({ reply: botReply });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server running on port', port);
});
