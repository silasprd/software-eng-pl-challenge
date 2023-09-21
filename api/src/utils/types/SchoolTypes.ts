import { TypeSchool } from "../enums/TypeSchool.enum"

export type CreateSchoolType = {
    cnpj: string
    name: string
    type: TypeSchool
}

export type UpdateSchoolType = {
    cnpj: string
    name: string
    type: TypeSchool
}