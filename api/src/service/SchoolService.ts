import { SchoolRepository } from '../repository/SchoolRepository';
import { School } from './../entity/School';
export class SchoolService {

    schoolRepo = new SchoolRepository()

    findAll(): Promise<School[]> {
        return this.schoolRepo.findAll()
    }

    findById(id: number): Promise<School | undefined> {
        return this.schoolRepo.findById(id)
    }

    create(school: School): Promise<School>{
        return this.schoolRepo.create(school)
    }

    update(schoolBody: School, id: number): Promise<void>{
        return this.schoolRepo.updateById(schoolBody, id)
    }

    delete(id: number): Promise<void>{
        return this.schoolRepo.deleteById(id)
    }

}