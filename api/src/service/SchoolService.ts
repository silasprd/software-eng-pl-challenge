import { SchoolRepository } from '../repository/SchoolRepository';
import { School } from './../entity/School';
export class SchoolService {

    schoolRepo = new SchoolRepository()

    findAll(){
        return this.schoolRepo.findAll()
    }

    findByCnpj(cnpj: string){
        return this.schoolRepo.findByCnpj(cnpj)
    }

    create(school: School){
        return this.schoolRepo.create(school)
    }

    update(school: School){
        return this.schoolRepo.update(school)
    }

    delete(school: School){
        return this.schoolRepo.delete(school)
    }

}