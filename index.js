const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.post("/reachme", async (req, res) => {
  const { name, subject, email, message } = req.body;
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
