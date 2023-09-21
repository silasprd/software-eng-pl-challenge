import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { TypeSchool } from "../../utils/enums/TypeSchool.enum";

@Entity()
export class School{

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    cnpj: string

    @Column()
    name: string 

    @Column()
    type: TypeSchool

    @OneToMany(() => Student, (student) => student.school, {nullable: true})
    @JoinColumn()
    students: Student[]
}