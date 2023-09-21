import { Student } from "../../core/entity/Student"
import { TypeActivity } from "../enums/TypeActivity.enum"

export type CreateActivityType = {
    describe: string
    points: number
    type: TypeActivity
    student: Student
}

export type UpdateActivityType = {
    describe: string
    points: number
    type: TypeActivity
}