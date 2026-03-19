const express = require("express");

const router = express.Router();

const systemPrompt =
  "You are an AI assistant answering questions about Suadik Husseini's developer portfolio. Keep answers concise, professional, and grounded in the portfolio details.";

router.post("/ask", async (req, res) => {
  const { question } = req.body || {};

  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "A question is required." });
  }

  if (!process.env.OPENAI_KEY) {
    return res.status(503).json({
      error: "OPENAI_KEY is not configured on the server.",
    });
  }

  try {
    const OpenAI = require("openai");
    const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
    });

    return res.json({
      answer: response.choices?.[0]?.message?.content || "",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Unable to process the AI request.",
      details: error.message,
    });
  }
});

module.exports = router;
