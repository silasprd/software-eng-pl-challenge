import { AppDataSource } from "../data-source";
import { School } from "../entity/School";

export class SchoolRepository{

    schoolDataSource = AppDataSource.getRepository(School)

    findAll(): Promise<School[]> {
        return this.schoolDataSource.find({
            relations:{
                students: true
            }
        })
    }

    findById(id: number): Promise<School | undefined> {
        return this.schoolDataSource.findOne({
            where: {
                id: id
            }
        })
    }

    create(school: School): Promise<School> {
        return this.schoolDataSource.save(school)
    }

    async updateById(schoolBody: School, id: number): Promise<void> {
        await this.schoolDataSource.update({ id: id }, schoolBody);
    }

    async deleteById(id: number): Promise<void>{
        await this.schoolDataSource.delete({ id: id });
    }
}