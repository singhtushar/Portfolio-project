require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.post("/reachme", async (req, res) => {
  const { name, subject, email, message } = req.body;
  console.log(req.body);
  sendMail(email, subject, message, function (err, data) {
    if (err) {
      console.log("ERROR: ", err);
      return res.status(500).json({ message: err.message || "Internal Error" });
    }
    console.log("Email sent!!!");
    return res.json({ message: "Email sent!!!!!" });
  });
  res.json({
    name,
    subject,
    email,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});
