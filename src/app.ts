import express from "express";
import cors from "cors";
import logger from "morgan";

import { appRoutes } from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(appRoutes);

export { app };
