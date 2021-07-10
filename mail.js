const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "02ca566ee6d9063593c329a739639f49-c4d287b4-265c3011",
    domain:
      "https://app.mailgun.com/app/sending/domains/sandbox2dc7241ff1aa429e8bbf446d0c3f1675.mailgun.org", // TODO: Replace with your mailgun DOMAIN
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text) => {
  const mailOptions = {
    from: "singhtusharts22@gmail.com", // TODO replace this with your own email
    to: email, // TODO: the receiver email has to be authorized for the free tier
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      // return cb(err, null);
      console.log("error occured");
      console.log(err.message);
    } else {
      console.log("Email sent!!");
    }
  });
};

sendMail("b18cs021@nitm.ac.in", "Test Mail", "This is a testing email");

module.exports = sendMail;
