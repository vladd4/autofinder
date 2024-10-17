import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";

import { router as carRouter } from "./routes/carRouter.js";
import { router as filterRouter } from "./routes/filterRouter.js";
import { router as userRouter } from "./routes/userRouter.js";
import { router as savedRouter } from "./routes/savedRouter.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong. Try again later!");
});

const start = async () => {
  try {
    app.listen(process.env.SERVER_PORT, () =>
      console.log(`Server is started on port ${process.env.SERVER_PORT}!`)
    );
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/v1/cars", carRouter);

app.use("/api/v1/filters", filterRouter);

app.use("/api/v1/user", userRouter);

app.use("/api/v1/saved", savedRouter);

start();
