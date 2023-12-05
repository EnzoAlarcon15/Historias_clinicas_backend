const express = require("express");
const router = express.Router();
const patientsController = require("../controllers/patients.controller");

//para saber a que ruta le estoy pegando
router.use((req, res, next) => {
  console.log(`Ruta actual: ${req.path}`);
  next(); 
});

//patients
router.post("/", patientsController.createPatient);
router.get("/", patientsController.getPatients);
router.get("/:id", patientsController.getPatient);
router.put("/:id", patientsController.updatePatient);
router.delete("/:id", patientsController.deletePatient);
router.post("/search", patientsController.searchPatients);



module.exports = router;
