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
      process.env.MONGO_URI,
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
    if (process.env.NODE_ENV === "development") {
      // Set static folder
      app.use(express.static("client/build"));
      app.get("*", (req, res) => {
        res.sendFile(
          path.join(__dirname, "/", "./client/build", "index.html")
        );
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
