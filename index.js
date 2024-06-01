// Developed By Ketan Gaikwad
const express = require("express");
const conn = require("./db");
const env = require("dotenv");

const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const adminRoutes = require("./Routes/Admin/auth");
const admin = require("./Routes/Admin/admin");
const classRout = require("./Routes/class.rout");
const setRout = require("./Routes/set.rout");
conn.connectDB();
app.use(cors());
env.config();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json());
app.use("/api", adminRoutes);;
app.use("/api", admin);
app.use("/api", classRout);
app.use("/api", setRout);
 

app.get("/", (req, res) => {
    return res.send("Welcome To Ketan's Server");
  });
  
 app.listen(5000, () => {
  console.log(
    `server running successfully on port http://localhost:${5000}`
  );
});

