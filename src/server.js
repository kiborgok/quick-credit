import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { authRoutes, loanRoutes } from "./routes/index";
dotenv.config();

(async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://kiborgok:Matesya1@uplift-tdpp1.mongodb.net/quickcredit?retryWrites=true&w=majority",
      //"mongodb://localhost:27017/uplift?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("MongoDB connected");

    const app = express();
    const port = process.env.PORT || 5000;

    app.disable("x-powered-by");
    app.use(express.json());
    app.use(cors({ credentials: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Serve static assets if in production
    // if (process.env.NODE_ENV === "production") {
    //   // Set static folder
    //   app.use(express.static("quick-credit-client/build"));
    //   app.get("*", (req, res) => {
    //     res.sendFile(
    //       path.join(__dirname, "/", "../quick-credit-client/build", "index.html")
    //     );
    //   });
    // }
    if (process.env.NODE_ENV === "production") {
      // Set static folder
      app.use("/", express.static("client/build"), {
        setHeaders: function (res) {
          res.setHeader("Content-Type", "application/json");
        },
      });

      app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "/", "../client/build", "index.html"), {
          'setHeaders': function (res) {
            res.setHeader("Content-Type", "application/json");
          }
        });
      });
    }

    const apiRouter = express.Router();
    app.use("/api/v1", apiRouter);
    apiRouter.use("/auth", authRoutes);
    apiRouter.use("/loans", loanRoutes);

    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
})();
