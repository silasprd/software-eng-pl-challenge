import { AppDataSource } from "../data-source";
import { School } from "../entity/School";

export class SchoolRepository{

    schoolDataSource = AppDataSource.getRepository(School)

    findAll(){
        return this.schoolDataSource.find({
            relations:{
                students: true
            }
        })
    }

    findByCnpj(cnpj: string){
        return this.schoolDataSource.findOne({
            where: {
                cnpj: cnpj
            }
        })
    }

    create(school: School){
        return this.schoolDataSource.save(school)
    }

    async update(school: School){
        const schoolToUpdate = await this.schoolDataSource.findOne({ where: {cnpj: school.cnpj}})
        return this.schoolDataSource.update(school, schoolToUpdate)
    }

    async delete(school: School){
        const schoolToUpdate = await this.schoolDataSource.findOne({ where: {cnpj: school.cnpj}})
        return this.schoolDataSource.delete(schoolToUpdate)
    }
}