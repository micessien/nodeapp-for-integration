// Generate PDF File And pass info inside
async function generatePdfFile(req, res) {
  try {
    return res.status(200).json({ result: "File generated", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      errors: error,
      success: false,
    });
  }
}

module.exports = {
  generatePdfFile,
};
