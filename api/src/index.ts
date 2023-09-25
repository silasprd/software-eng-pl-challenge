import { AppDataSource } from "./data-source"
import 'reflect-metadata';
import express from "express";
import cors from "cors"
import { createSchoolRouter } from "./routes/SchoolRoutes";
import { createStudentRouter } from "./routes/StudentRoutes";
import { createActivityRouter } from "./routes/ActivityRoutes";

const app = express()
const port = 3000
const http = require('http');
const setupWebSocket = require('./websocket');
app.use("/", express.json());
app.use(cors())

const server = http.createServer(app);
const io = setupWebSocket(server);

io.on('connection', (socket) => {
  console.log('Cliente conectado ao WebSocket');
});

AppDataSource.initialize().then(async () => {

    const schoolRoutes = createSchoolRouter()
    const studentRoutes = createStudentRouter()
    const activityRoutes = createActivityRouter()

    app.use("/schools", schoolRoutes)
    app.use("/students", studentRoutes)
    app.use("/activities", activityRoutes)

    server.listen(port, () => {
        console.log(`Servidor Express e Socket.io rodando na porta ${port}`);
    })

}).catch(error => console.log(error))
