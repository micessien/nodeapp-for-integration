const sendgridMail = require("@sendgrid/mail");

// Initialize setApiKey And Initialize Nodemailer
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sendgridMail;
