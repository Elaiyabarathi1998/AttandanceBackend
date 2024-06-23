import express, { Application } from "express";
import Server from "./src/index";
import mongoose from "mongoose";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8081;

const mongoUrl = 'mongodb://mongo:27017/adminlog';
const mongooseConnection = mongoose.connect(mongoUrl);

mongooseConnection.then(
  () => {
    console.log("Connected to mongo db server");
    app.listen(PORT, "0.0.0.0", function () {
        console.log(`Server is running on port ${PORT}.`);
      })
      .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
          console.log("Error: address already in use");
        } else {
          console.log(err);
        }
      });
  },
  (err) => {
    console.log(err);
  }
)
