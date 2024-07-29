import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post("/gomain", (req, res) => {
  console.log("Data received:", req.body);
  res.json({ message: "Data received successfully" });
});

app.listen(port, () => {
  console.log(`Target server is running at http://localhost:${port}`);
});
