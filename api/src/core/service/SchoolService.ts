import { CreateSchoolType, UpdateSchoolType } from '../../utils/types/SchoolTypes';
import { SchoolRepository } from '../repository/SchoolRepository';

class SchoolService {

    public async findById(id: number){
        try {
            const schoolFound = await SchoolRepository.findOne({
                where: {
                    id: id
                }
            })
            return schoolFound
        } catch (error) {
            console.log(error)
            throw new Error('Error to find one school in service');
        }
    }
    
    public async createSchool({cnpj, name, type}: CreateSchoolType){
        try {
            const createdSchool = await SchoolRepository.create({cnpj, name, type})
            const savedSchool = await SchoolRepository.save(createdSchool)
            return savedSchool;
        } catch (error) {
            console.log(error)
            throw new Error('Error to create school in service');
        }
    }
    
    public async findAllSchools(){
        try {
            const schoolsFound = await SchoolRepository.find({
                relations: ["students"]
            })
            return schoolsFound
        } catch (error) {
            console.log(error)
            throw new Error('Error to list schools in service');
        }
    }

    public async deleteById(id: number){
        try {
            const schoolFound= await SchoolRepository.findOne({
                where: {
                    id: id
                }
            })
            const schoolToDelete = await SchoolRepository.delete(schoolFound)
            return schoolToDelete
        } catch (error) {
            console.log(error)
            throw new Error('Error to delete school in service');
        }
    }

    public async updateById({cnpj, name, type}: UpdateSchoolType, id: number){
        try {
            const schoolToUpdate= await SchoolRepository.findOne({
                where: {
                    id: id
                }
            })

            schoolToUpdate.cnpj = cnpj
            schoolToUpdate.name = name
            schoolToUpdate.type = type
            
            const schoolUpdated = await SchoolRepository.save(schoolToUpdate)
            return schoolUpdated
        } catch (error) {
            console.log(error)
            throw new Error('Error to update school in service');
        }
    }

}

export default new SchoolService();