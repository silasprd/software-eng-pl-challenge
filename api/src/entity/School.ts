import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Student } from "./Student";
import { TypeSchool } from "../enums/TypeSchool.enum";

@Entity()
export class School{

    @PrimaryColumn({type: 'varchar', length: 18})
    cnpj: string

    @Column()
    name: string 

    @Column()
    type: TypeSchool

    @OneToMany(() => Student, (student) => student.school, {nullable: true})
    students: Student[]
}