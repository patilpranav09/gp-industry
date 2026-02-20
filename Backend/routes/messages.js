const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  console.log("📩 Contact API hit. Body:", req.body);
  try {
    const { name, email, message } = req.body;

    // 1) Save to MongoDB
    const newMsg = new Message({ name, email, message });
    await newMsg.save();

    // 2) Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // company email
        pass: process.env.MAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: "New Contact Enquiry - GP Industries",
      text: `
New enquiry received:

Name: ${name}
Email: ${email}
Message:
${message}
      `,
    };
    console.log("📤 Trying to send email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

module.exports = router;
