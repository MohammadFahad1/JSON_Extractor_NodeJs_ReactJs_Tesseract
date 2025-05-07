const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Tesseract = require("tesseract.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Endpoint to receive base64 image
app.post("/convert", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image || !image.startsWith("data:image")) {
      return res.status(400).json({ error: "Invalid or missing image data" });
    }

    // OCR using Tesseract
    const result = await Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    });

    const rawText = result.data.text;

    let json = {};
    try {
      // Parse extracted text as JSON
      json = JSON.parse(rawText);
    } catch (err) {
      return res.status(200).json({
        success: true,
        warning: "Text extracted, but not valid JSON format.",
        extractedText: rawText.trim(),
      });
    }

    res.status(200).json({ success: true, json });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong processing the image." });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to JSON Extraction - Back End");
  setTimeout(() => {
    res.redirect("/convert");
  }, 5000);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
