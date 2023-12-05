const express = require("express");
const router = express.Router();
const prescriptionsController = require("../controllers/prescriptionsController");


//para saber a que ruta le estoy pegando
router.use((req, res, next) => {
    console.log(`Ruta actual: ${req.path}`);
    next(); 
  });

  //prescriptions

  router.post("/", prescriptionsController.createPrescriptions)
  router.get("/prescriptions/:id", prescriptionsController.getPrescriptions)


  module.exports = router;