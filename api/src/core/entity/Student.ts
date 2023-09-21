import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Activity } from "./Activity";
import { School } from "./School";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    ra: string

    @Column()
    name: string

    @OneToMany(() => Activity, (activity) => activity.student, {nullable: true})
    activities: Activity[]

    @ManyToOne(() => School, (school) => school.students)
    school: School
}