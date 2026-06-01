const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());

// Your server reads this from a secure setting on the dashboard, NOT hardcoded
const aiEngine = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/ai', async (req, res) => {
  try {
    const response = await aiEngine.models.generateContent({
      model: "gemini-2.5-flash",
      contents: req.body.prompt,
    });
    res.json({ text: response.text });
  } catch (error) {
    res.status(500).json({ error: "AI subsystem error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
