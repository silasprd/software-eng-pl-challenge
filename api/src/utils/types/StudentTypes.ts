import { School } from "../../core/entity/School"

export type CreateStudentType = {
    ra: string
    name: string
    school?: School
}

export type UpdateStudentType = {
    ra: string
    name: string
    school?: School
}