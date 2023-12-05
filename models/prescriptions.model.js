const db = require("../config/ConnectionDB");

exports.createPrescriptions = (
        date,
        patient,
        medication,
        dosage,
        frequency,
        time
)=>{
    return db("prescriptions").insert({
        date,
        patient,
        medication,
        dosage,
        frequency,
        time
    })
}


exports.getPatientById = (id) => {
    return db("prescription").where({ id }).select(
        date,
        patient,
        medication,
        dosage,
        frequency,
        time
    );
  };