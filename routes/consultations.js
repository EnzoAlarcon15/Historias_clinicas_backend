const express = require("express");
const router = express.Router();
const consultationsController = require("../controllers/consultationsController")


//para saber a que ruta le estoy pegando
router.use((req, res, next) => {
  console.log(`Ruta actual: ${req.path}`);
  next(); 
});

//consultation

router.post("/", consultationsController.createConsultation);
router.get("/consultations/:id", consultationsController.getConsultation);
router.put("/consultations/:id", consultationsController.updateConsultation); 
router.delete("/consultations/:id", consultationsController.deleteConsultation);


module.exports = router;