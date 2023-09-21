import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeActivity } from "../../utils/enums/TypeActivity.enum";
import { Student } from "./Student";

@Entity()
export class Activity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    describe: string

    @Column()
    points: number

    @Column()
    type: TypeActivity

    @ManyToOne(() => Student, (student) => student.activities)
    student: Student
}