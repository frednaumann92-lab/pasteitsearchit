const express = require('express');
const cors = require('cors');
// FIX 1: Correctly destructure GoogleGenAI from the official SDK
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());

// Verify API Key exists on startup to help debug Render configs
if (!process.env.GEMINI_API_KEY) {
  console.warn("WARNING: GEMINI_API_KEY is not defined in environment variables!");
}

const aiEngine = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/ai', async (req, res) => {
  try {
    const userPrompt = req.body.prompt;
    
    // Safety check: Prevent crashing if the incoming payload is empty
    if (!userPrompt) {
      return res.status(400).json({ error: "Missing 'prompt' field in request body." });
    }

    // FIX 2: Use the exact, correct SDK structural method call for gemini-2.5-flash
    const response = await aiEngine.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
    });

    res.json({ text: response.text });
  } catch (error) {
    // FIX 3: Print the actual error message to your Render dashboard logs!
    console.error("AI SUBSYSTEM CRASH DETECTED:", error);
    
    res.status(500).json({ 
      error: "AI subsystem error", 
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 10000; // Render uses port 10000 by default
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
