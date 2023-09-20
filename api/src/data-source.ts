import "reflect-metadata"
import { DataSource } from "typeorm"
import { School } from "./entity/School"
import { Activity } from "./entity/Activity"
import { Student } from "./entity/Student"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5171,
    username: "root",
    password: "TelLink1020",
    database: "dnc",
    synchronize: true,
    logging: false,
    entities: [School, Activity, Student],
    migrations: [],
    subscribers: [],
})
