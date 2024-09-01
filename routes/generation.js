const express = require("express");
const generationController = require("../controllers/generation.controller");
const router = express.Router();

router.get("/pdf-file", generationController.generatePdfFile);

module.exports = router;
