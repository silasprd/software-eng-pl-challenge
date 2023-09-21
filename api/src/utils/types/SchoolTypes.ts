import { Student } from "../../core/entity/Student"
import { TypeSchool } from "../enums/TypeSchool.enum"

export type CreateSchoolType = {
    cnpj: string
    name: string
    type: TypeSchool
    students?: Student[]
}

export type UpdateSchoolType = {
    cnpj: string
    name: string
    type: TypeSchool
    students?: Student[]
}