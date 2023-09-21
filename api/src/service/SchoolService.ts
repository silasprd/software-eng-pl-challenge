import { SchoolRepository } from '../repository/SchoolRepository';
import { School } from './../entity/School';

export class SchoolService {
    
    constructor(
        private schoolRepo: SchoolRepository    
    ){}
    
    async create(school: School): Promise<School>{
        try {
            return await this.schoolRepo.create(school)
        } catch (error) {
            console.log(error)
        }
    }
    
    findAll(): Promise<School[]> {
        return this.schoolRepo.findAll()
    }

    findById(id: number): Promise<School | undefined> {
        return this.schoolRepo.findById(id)
    }


    updateById(schoolBody: School, id: number): Promise<void>{
        return this.schoolRepo.updateById(schoolBody, id)
    }

    deleteById(id: number): Promise<void>{
        return this.schoolRepo.deleteById(id)
    }

}