const db = require("../config/ConnectionDB");

const consultationData = {
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

exports.createConsultation = (consultationData) => {
  return db("consultations").insert(consultationData);
};

exports.getConsultationById = (consultationId) => {
  return db("consultations").where("id", consultationId).first();
};

exports.updateConsultation = (consultationId, updatedData) => {
  return db("consultations").where("id", consultationId).update(updatedData);
};

exports.deleteConsultation = (consultationId) => {
  return db("consultations").where("id", consultationId).del();
};


