import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Activity } from "./Activity";
import { School } from "./School";

@Entity()
export class Student {

    @PrimaryColumn({ type: 'varchar', length: 10 })
    ra: string

    @Column()
    name: string

    @OneToMany(() => Activity, (activity) => activity.student, {nullable: true})
    activities: Activity[]

    @ManyToOne(() => School, (school) => school.students)
    school: School
}