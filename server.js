const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); 
app.use(express.json());

app.post('/message', (req, res) => {
  const userMessage = req.body.message;
  res.json({ reply: `You said: ${userMessage}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

