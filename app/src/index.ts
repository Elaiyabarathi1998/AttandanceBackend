import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes/entryPathAPI";
import bodyParser from "body-parser";
export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    // const corsOptions: CorsOptions = {
    //   origin: "http://localhost:8081",
    //   methods:["GET","POST"]
      
    // };

    app.use(cors());
    app.use((req, res, next) => {
      // res.header("Access-Control-Allow-Origin", "http://localhost:5000");
      // res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      next();
    });
    
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
  }
}
