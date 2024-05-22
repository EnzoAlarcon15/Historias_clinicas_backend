const express = require("express");
const router = express.Router();
const consultationsController = require("../controllers/consultationsController");

// para saber a qué ruta le estoy pegando
router.use((req, res, next) => {
  console.log(`Ruta actual: ${req.path}`);
  next(); 
});

// consultation
router.post("/", consultationsController.createConsultation);
router.get("/", consultationsController.getConsultation);
router.put("/:id", consultationsController.updateConsultation); 
router.delete("/:id", consultationsController.deleteConsultation);

module.exports = router;

