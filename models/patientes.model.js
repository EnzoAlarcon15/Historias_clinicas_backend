const db = require("../config/ConnectionDB");

exports.createPatient = (
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
    notes,) => {
  return db("patients").insert({
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
  });
};

exports.getPatientById = (id) => {
  return db("patients").where({ id }).select(
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
    "dni",
    "date",
  );
};

exports.updatePatient = (id, updatedData) => {
  return db("patients")
    .where({ id })
    .update(updatedData)
    .then(() => {
      console.log("Paciente actualizado exitosamente");
    })
    .catch((error) => {
      console.error("Error al actualizar el paciente:", error);
      throw new Error("Error al actualizar el paciente");
    });
};




exports.deletePatient = (id) => {
  return db("patients").where({ id }).del();
};


