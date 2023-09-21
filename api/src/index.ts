import { AppDataSource } from "./data-source"
import 'reflect-metadata';
import express from "express";
import { createSchoolRouter } from "./routes/Routes";


const app = express()
const port = 3000

AppDataSource.initialize().then(async () => {

    const schoolRouter = createSchoolRouter();
    
    app.use("/", schoolRouter)

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    })

}).catch(error => console.log(error))
