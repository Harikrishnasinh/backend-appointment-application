import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// configuring the dotenv file as per the tree
dotenv.config({
  path: "./.env",
});
// initializing the app

const app = express();

app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`PORT IS STARTED ON ${process.env.PORT}`);
});
