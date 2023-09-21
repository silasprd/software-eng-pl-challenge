import { SchoolRepository } from '../repository/SchoolRepository';
import { School } from './../entity/School';

export class SchoolService {

    constructor(private schoolRepo: SchoolRepository){}

    findAll(): Promise<School[]> {
        return this.schoolRepo.findAll()
    }

    findById(id: number): Promise<School | undefined> {
        return this.schoolRepo.findById(id)
    }

    create(school: School): Promise<School>{
        return this.schoolRepo.create(school)
    }

    updateById(schoolBody: School, id: number): Promise<void>{
        return this.schoolRepo.updateById(schoolBody, id)
    }

    deleteById(id: number): Promise<void>{
        return this.schoolRepo.deleteById(id)
    }

}