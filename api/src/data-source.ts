import "reflect-metadata"
import { DataSource } from "typeorm"
import { School } from "./core/entity/School"
import { Activity } from "./core/entity/Activity"
import { Student } from "./core/entity/Student"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "dnc",
    synchronize: true,
    logging: false,
    entities: [School, Activity, Student],
    migrations: [],
    subscribers: [],
})
