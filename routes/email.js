const express = require("express");
const emailController = require("../controllers/email.controller");
const router = express.Router();

router.get("/send-template", emailController.sendTemplate);

module.exports = router;
