const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const authRoutes = require("./router/authRouter");

const cookieParser = require("cookie-parser");
const app = express();
// database connection
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db not connected", err));
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoutes);

const port = 8000;
app.listen(port, () => console.log(`serrver  ${port}`));
