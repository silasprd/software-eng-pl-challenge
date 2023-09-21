import { Repository } from "typeorm";
import { School } from "../entity/School";
import { AppDataSource } from "../data-source";

export class SchoolRepository {

    constructor(
        private schoolDataSource: Repository<School> = AppDataSource.getRepository(School)
    ) { }

    async create(school: School): Promise<School> {
        try {
            return await this.schoolDataSource.save(school)
        } catch (error) {
            console.log(error)
        }
    }


    findAll(): Promise<School[]> {
        return this.schoolDataSource.find({
            relations: {
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
    async updateById(schoolBody: School, id: number): Promise<void> {
        await this.schoolDataSource.update({ id: id }, schoolBody);
    }

    async deleteById(id: number): Promise<void> {
        await this.schoolDataSource.delete({ id: id });
    }
}