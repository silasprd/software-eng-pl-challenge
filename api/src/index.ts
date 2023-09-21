import { AppDataSource } from "./data-source"
import 'reflect-metadata';
import express from "express";
import { createSchoolRouter } from "./routes/SchoolRoutes";
import { createStudentRouter } from "./routes/StudentRoutes";
import { createActivityRouter } from "./routes/ActivityRoutes";

const app = express()
const port = 3000
app.use("/", express.json());

AppDataSource.initialize().then(async () => {

    const schoolRoutes = createSchoolRouter()
    const studentRoutes = createStudentRouter()
    const activityRoutes = createActivityRouter()

    app.use("/schools", schoolRoutes)
    app.use("/students", studentRoutes)
    app.use("/activities", activityRoutes)

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    })

}).catch(error => console.log(error))
