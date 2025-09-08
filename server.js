import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple hello
app.get("/", (req, res) => {
  res.send("Larissa AI Agent is alive 🚀");
});

// Endpoint to read FAQ (later this will be smarter)
app.get("/faq", (req, res) => {
  const faqs = fs.readFileSync(path.join("kb", "faqs.md"), "utf8");
  res.type("text/plain").send(faqs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
