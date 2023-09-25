import { Student } from "../core/entity/Student";
import { AppDataSource } from "../data-source";

class StudentsDataMocked {

    public async createStudentsMocked(){
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "97426588944",
                name: "Lucas Henrique",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "8989665523",
                name: "Marcos Paulo",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "7877445514",
                name: "Jonas Furtado",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "2564897222",
                name: "Andressa Lima",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "7456888825",
                name: "Kallebe Johnson",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "5452444120",
                name: "Kléber Lucas",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "1525456588",
                name: "Mariana Johnnes",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "2233658845",
                name: "Henrique Claro",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "4155458899",
                name: "Laura Simmers",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "7550006988",
                name: "Christopher Ribeiro",
                totalScore: 0,
                activities: [],
                school: { id: 1 }
            })
        )

        //--------------------------------------------------//

        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "4568778141",
                name: "Jonas Toledo",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "1565253588",
                name: "Mateus Rennes",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "6555238899",
                name: "Carla Tashima",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "8989556565",
                name: "Ana Laura Coimbra",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "5575441236",
                name: "Kaio Lima",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "3326265589",
                name: "Ryan Lucas",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "3344558874",
                name: "Marluce Oliveira",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "3266898844",
                name: "João Carlos",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "3636985547",
                name: "Clara Lima",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "4111236689",
                name: "Christopher Ribeiro",
                totalScore: 0,
                activities: [],
                school: { id: 2 }
            })
        )

        // ----------------------------------------------

        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "2013455589",
                name: "Lucas Matheus",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "1105603212",
                name: "Luzia Mara",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "7077556789",
                name: "Luna Marques",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "0120365588",
                name: "João Gabriel",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "6502003021",
                name: "Kyan Montes",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "8090456626",
                name: "Norma Andrade",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "8974505064",
                name: "Marcos Oliveira",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "4454886060",
                name: "João das Dores",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "9056502123",
                name: "Maria Laura Neves",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Student, {
                ra: "4568992213",
                name: "Julia Castro",
                totalScore: 0,
                activities: [],
                school: { id: 3 }
            })
        )
    }
}

export default new StudentsDataMocked();