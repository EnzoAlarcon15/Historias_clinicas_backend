const db = require("../config/ConnectionDB");
const idHandler = require("../helpers/idHandler.helper");

exports.createConsultation = (req, res) => {
  console.log("/consultations");
  console.log(req.body);

  const id = idHandler.idGenerator();
  const {
    patient_id,
    date,
    patient,
    gynecologist,
    reason_for_consultation,
    medical_history,
    physical_examination,
    diagnosis,
    treatment,
    notes

    
  } = req.body;

  const data_consultation = {
    id,
    patient_id,
    date,
    patient,
    gynecologist,
    reason_for_consultation,
    medical_history,
    physical_examination,
    diagnosis,
    treatment,
    notes
  };

  for (let key in data_consultation) {
    if (data_consultation[key] == null || data_consultation[key] == "" || data_consultation[key] == undefined) {
      return res.status(400).json({ error: "Error en el campo " + key });
    }
  }

  db("consultations")
    .insert(data_consultation)  
    .then(() => {  
      console.log("Consulta creada exitosamente");
      res.json({ message: "Consulta creada exitosamente" });
    })
    .catch((error) => {
      console.error("Error al crear la consulta:", error);
      res.status(500).json({ error: "Error al crear la consulta" });
    });
};



exports.getConsultation = async (_req, res) => {
  try {
    const data = await db("consultations").select('*');
    res.json(data);
    console.log("Consultas traidas")
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las consultas' });
  }
};


exports.updateConsultation = (req, res) => {
  const consultationId = req.params.id;
  const updatedData = req.body;

  db("consultations")
    .where("id", consultationId)
    .update(updatedData)
    .then(() => {
      console.log("Consulta actualizada exitosamente");
      res.json({ message: "Consulta actualizada exitosamente" });
    })
    .catch((error) => {
      console.error("Error al actualizar la consulta:", error);
      res.status(500).json({ error: "Error al actualizar la consulta" });
    });
};

exports.deleteConsultation = (req, res) => {
  const consultationId = req.params.id;

  db("consultations")
    .where("id", consultationId)
    .del()
    .then(() => {
      console.log("Consulta eliminada exitosamente");
      res.json({ message: "Consulta eliminada exitosamente" });
    })
    .catch((error) => {
      console.error("Error al eliminar la consulta:", error);
      res.status(500).json({ error: "Error al eliminar la consulta" });
    });
};



