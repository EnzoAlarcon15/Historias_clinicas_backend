const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const consultations = require("./routes/consultations.js");
const prescriptions = require("./routes/prescription.js");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/patients", routes); 
app.use("/consultations", consultations);
app.use("/prescriptions", prescriptions);

app.listen(process.env.service_port, () => {
  console.log("Servidor iniciado en el puerto ", process.env.service_port);
});


