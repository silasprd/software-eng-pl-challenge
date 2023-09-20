import { AppDataSource } from "./data-source"
import 'reflect-metadata';
import { Activity } from "./entity/Activity"
import { School } from "./entity/School"
import { Student } from "./entity/Student"
import { TypeActivity } from "./enums/TypeActivity.enum"
import { TypeSchool } from "./enums/TypeSchool.enum"
import express from "express";
import { Routes } from "./routes/routes";
const app = express()
const port = 3000

AppDataSource.initialize().then(async () => {

    const routes = new Routes();
    // app.use("/", routes.getRouter())

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    })


    const school = new School()
    school.cnpj = '00.000.000/0000-00'
    school.name = 'Escola de Dados'
    school.type = TypeSchool.DADOS

    const student = new Student()
    student.name = "Timber"
    student.ra = "123456789"
    student.school = school

    const activity = new Activity()
    activity.describe = "Atividade de casa"
    activity.points = 95
    activity.type = TypeActivity.TAREFA
    activity.student = student

    await AppDataSource.manager.save(school)
    console.log("Saved a new school with cnpj: " + school.cnpj)

    await AppDataSource.manager.save(student)
    console.log("Saved a new student with ra: " + student.ra)

    await AppDataSource.manager.save(activity)
    console.log(`Saved a new Activity for the student ${student.name} with id: ` + activity.id)

    console.log("Loading data from the database...")

    const schools = await AppDataSource.manager.find(School)
    console.log("Loaded schools: ", schools)
    const students = await AppDataSource.manager.find(Student)
    console.log("Loaded students: ", students)
    const activities = await AppDataSource.manager.find(Activity)
    console.log("Loaded activities: ", activities)


}).catch(error => console.log(error))
