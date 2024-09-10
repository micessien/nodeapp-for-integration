// Initialize
const sendgridMail = require("../config/sendgridMail");
const ejs = require("ejs");
const path = require("node:path");

// Local function
async function sendEmail(to, subject, template, data) {
  try {
    // Render the ejs template
    const html = await ejs.renderFile(
      path.join(__dirname, "../templates/" + template + ".ejs"),
      data,
      { async: true }
    );
    const mailMsg = {
      from: process.env.EREGISTRATION_EMAIL, // Change to your verified sender
      to, // Change to your recipient
      subject, // Subject line
      html,
    };
    // Send Message
    await sendgridMail.send(mailMsg);
  } catch (error) {
    console.log("Error: ", error);
  }
}

// Send email template
async function sendTemplate(req, res) {
  try {
    // Send email
    await sendEmail(
      "micaeldie@gmail.com",
      "TEST: Send email",
      "welcomeMessage",
      {
        userName: "John Dota",
        email: "micaeldie@gmail.com",
      }
    );
    return res.status(200).json({ result: "Send Template", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      errors: error,
      success: false,
    });
  }
}

module.exports = {
  sendTemplate,
};
