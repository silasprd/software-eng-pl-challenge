import { AppDataSource } from "./data-source"
import 'reflect-metadata';
import express from "express";
import cors from "cors"
import { createSchoolRouter } from "./routes/SchoolRoutes";
import { createStudentRouter } from "./routes/StudentRoutes";
import { createActivityRouter } from "./routes/ActivityRoutes";
import SchoolDataMocked from "./data-mocked/SchoolDataMocked";
import StudentDataMocked from "./data-mocked/StudentDataMocked";
import ActivityDataMocked from "./data-mocked/ActivityDataMocked";

const app = express()
const port = 3000
app.use("/", express.json());
app.use(cors())



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

    await SchoolDataMocked.createSchoolMocked()
    await StudentDataMocked.createStudentsMocked()


}).catch(error => console.log(error))
