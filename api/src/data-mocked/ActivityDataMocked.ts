import { Activity } from "../core/entity/Activity"
import { AppDataSource } from "../data-source"
import { TypeActivity } from "../utils/enums/TypeActivity.enum"

class ActivityDataMocked{

    public async createActivitiesMocked(){
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Desafio",
                points: 100,
                type: TypeActivity.DESAFIO,
                student: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Nova Tarefa",
                points: 85,
                type: TypeActivity.TAREFA,
                student: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Projeto",
                points: 75,
                type: TypeActivity.PROJETO,
                student: { id: 1 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Desafio",
                points: 95,
                type: TypeActivity.DESAFIO,
                student: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Desafio",
                points: 55,
                type: TypeActivity.DESAFIO,
                student: { id: 2 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Projeto",
                points: 75,
                type: TypeActivity.PROJETO,
                student: { id: 3 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Desafio",
                points: 95,
                type: TypeActivity.DESAFIO,
                student: { id: 11 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Desafio",
                points: 95,
                type: TypeActivity.DESAFIO,
                student: { id: 11 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Nova Tarefa",
                points: 75,
                type: TypeActivity.TAREFA,
                student: { id: 12 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Nova Tarefa",
                points: 70,
                type: TypeActivity.TAREFA,
                student: { id: 13 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Nova Tarefa",
                points: 100,
                type: TypeActivity.TAREFA,
                student: { id: 21 }
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Activity, {
                describe: "Novo Projeto",
                points: 100,
                type: TypeActivity.PROJETO,
                student: { id: 21 }
            })
        )
    }

}

export default new ActivityDataMocked()