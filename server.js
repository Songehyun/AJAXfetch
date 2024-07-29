const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post("/gomain", (req, res) => {
  const { 아이디, 비밀번호 } = req.body;

  console.log(req.body);

  if (아이디 === "admin" && 비밀번호 === "1234") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
