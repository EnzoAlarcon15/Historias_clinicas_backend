const db = require("../config/ConnectionDB");
const  idHandler  = require("../helpers/idHandler.helper");

exports.createPatient = (req, res) => {
  console.log("/patients");
  console.log(req.body);
  const id = idHandler.idGenerator();
  const {
    name,
    last_name,
    address,
    location,
    province,
    cell_phone,
    mail,
    birthdate,
    blood_type,
    rh,
    coverage,
    date,
    cod_post,
    nationalid,
    telephone,
    type_of_do,
    no_of_doc,
    sex,
    est_civil,
    occupation,
    type_of_debt,
    cod_deudorcod_plan,
    nro_affilia,
    primera_vi,
    cuit,
    condition,
    notes
  } = req.body;

  const data_body = {
    name,
    last_name,
    address,
    location,
    province,
    cell_phone,
    mail,
    birthdate,
    blood_type,
    rh,
    coverage,
    date,
    cod_post,
    nationalid,
    telephone,
    type_of_do,
    no_of_doc,
    sex,
    est_civil,
    occupation,
    type_of_debt,
    cod_deudorcod_plan,
    nro_affilia,
    primera_vi,
    cuit,
    condition,
    notes
  };

  for (let key in data_body) {
    if (data_body[key] == null || data_body[key] == "" || data_body[key] == undefined) {
      return res.status(400).json({ error: "Error en el campo " + key });
    }
  }

  db("patients")
    .insert(data_body)
    .then(() => {
      console.log("Paciente creado exitosamente");
      res.json({ message: "Paciente creado exitosamente" });
    })
    .catch((error) => {
      console.error("Error al crear el paciente:", error);
      res.status(500).json({ error: "Error al crear el paciente" });
    });
};

exports.getPatients = (_req,res)=>{
  db("patients").select('*')
  .then(data => res.json(data))
  .catch(() =>res.status(500).json({error:'Error al obtener los pacientes'}))
}

exports.getPatient = (req, res) => {
  const { id } = req.params;
  db("patients")
    .where({ id })
    .select(
      "name",
      "last_name",
      "address",
      "location",
      "province",
      "cell_phone",
      "mail",
      "birthdate",
      "blood_type",
      "rh",
      "coverage",
      "family_history",
      "personal_background",
      "dni",
      "date",
    )
    .then((patient) => {
      if (patient.length === 0) {
        return res.status(404).json({
          error: "No se encontró ningún paciente con el ID proporcionado",
        });
      }
      res.json({ patient });
    })
    .catch((error) => {
      console.error("Error al obtener el paciente:", error);
      res.status(500).json({ error: "Error al obtener el paciente" });
    });
};



exports.deletePatient = (req, res) => {
  const { id } = req.params;
  console.log(id)
  db("patients")
    .where({ id })
    .del()
    .then(() => {
      console.log("Paciente eliminado exitosamente");
      res.json({ message: "Paciente eliminado exitosamente" });
    })
    .catch((error) => {
      console.error("Error al eliminar el paciente:", error);
      res.status(500).json({ error: "Error al eliminar el paciente" });
    });
};



exports.updatePatient = (req, res) => {
  const { id } = req.params;
  const {
    name,
    last_name,
    address,
    location,
    province,
    cell_phone,
    mail,
    birthdate,
    blood_type,
    rh,
    coverage,
    family_history,
    personal_background,
    dni,
    date,
  } = req.body;

  const updatedData = {
    name,
    last_name,
    address,
    location,
    province,
    cell_phone,
    mail,
    birthdate,
    blood_type,
    rh,
    coverage,
    family_history,
    personal_background,
    dni,
    date,
  };
  console.log(updatedData)

  db("patients")
    .where({ id })
    .update(updatedData)
    .then(() => {
      console.log("Paciente actualizado exitosamente");
      res.status(200).json({ message: "Paciente actualizado exitosamente", error:false });
    })
    .catch((error) => {
      console.error("Error al actualizar el paciente:", error);
      res.status(500).json({ error: "Error al actualizar el paciente" });
    });
};


exports.searchPatients = (req, res) => {
  const { data } = req.body;

  db("patients")
    .where((builder) => {
      builder
        .where("name", "LIKE", `%${data}%`)
        .orWhere("last_name", "LIKE", `%${data}%`)
        .orWhereRaw(`CAST(dni AS TEXT) LIKE '%${data}%'`);
    })
    .select("*")
    .then((patients) => {
      res.json(patients);
    })
    .catch((error) => {
      console.error("Error al buscar pacientes:", error);
      res.status(500).json({ error: "Error al buscar pacientes" });
    });
}



