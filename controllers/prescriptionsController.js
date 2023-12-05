const db = require("../config/ConnectionDB");
const idHandler = require("../helpers/idHandler.helper");

exports.createPrescriptions = (req, res) =>{
    console.log("/prescriptions")
    console.log(req.body);

    const id = idHandler.idGenerator();
    const {
        date,
        patient,
        medication,
        dosage,
        frequency,
        time
    }= req.body

    const dataPrescriptions={
        date,
        patient,
        medication,
        dosage,
        frequency,
        time
    };

    for (let key in dataPrescriptions) {
        if (dataPrescriptions[key] == null || dataPrescriptions[key] == "" || dataPrescriptions[key] == undefined) {
          return res.status(400).json({ error: "Error en el campo " + key });
        }
      }
      db("prescriptions")
    .insert(dataPrescriptions)  
    .then(() => {
      console.log("Prescriptions creada exitosamente");
      res.json({ message: "Prescriptions creada exitosamente" });
    })
    .catch((error) => {
      console.error("Error al crear la Prescriptions:", error);
      res.status(500).json({ error: "Error al crear la Prescriptions" });
    });
    

    

}

exports.getPrescriptions = (_req,res)=>{
  db("prescriptions").select('*')
  .then(data => res.json(data))
  .catch(() =>res.status(500).json({error:'Error al obtener los pacientes'}))
}
