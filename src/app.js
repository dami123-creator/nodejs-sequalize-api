import express  from "express";
import projectRoutes from "./routes/projects.routes.js"

const app = express();

//Middlewares
app.use(express.json())
app.use(projectRoutes);

export default app;