import { CreateStudentType, UpdateStudentType } from "../../utils/types/StudentTypes";
import { SchoolRepository } from "../repository/SchoolRepository";
import { StudentRepository } from "../repository/StudentRepository";

class StudentService{

    public async createStudent({ra, name, totalScore, school}: CreateStudentType){
        try {
            if (!school || !school.id) {
                throw new Error('Invalid school data');
            }
            const schoolId = school.id
            const schoolFound = await SchoolRepository.findOne({
                where: {
                    id: schoolId
                }
            })
            
            if(!schoolFound){
                throw new Error('School not found');
            }

            totalScore = 0

            const createdStudent = await StudentRepository.create({
                ra, 
                name, 
                totalScore: totalScore,
                school: schoolFound
            })

            const savedStudent = await StudentRepository.save(createdStudent)
            return savedStudent;
        } catch (error) {
            console.log(error)
            throw new Error('Error to create student in service');
        }
    }

    public async findAllStudents(){
        try {
            const studentsFound = await StudentRepository.find({
                relations: ["school", "activities"]
            })
            return studentsFound
        } catch (error) {
            console.log(error)
            throw new Error('Error to list students in service');
        }
    }

    public async findStudentById(id: number){
        try {
            const studentFound = await StudentRepository.findOne({
                where: {
                    id: id
                },
                relations: ["school","activities"]
            })
            return studentFound
        } catch (error) {
            console.log(error)
            throw new Error('Error to find one student in service');
        }
    }

    public async updateStudentById({ra, name, school}: UpdateStudentType, id: number){
        try {
            const studentToUpdate = await StudentRepository.findOne({
                where: {
                    id: id
                }
            })

            studentToUpdate.ra = ra
            studentToUpdate.name = name
            if (school) studentToUpdate.school = school
            
            const studentUpdated = await StudentRepository.save(studentToUpdate)
            return studentUpdated
        } catch (error) {
            console.log(error)
            throw new Error('Error to update student in service');
        }
    }

    public async deleteStudentById(id: number){
        try {
            const studentFound= await StudentRepository.findOne({
                where: {
                    id: id
                }
            })
            const studentToDelete = await StudentRepository.delete(studentFound)
            return studentToDelete
        } catch (error) {
            console.log(error)
            throw new Error('Error to delete student in service');
        }
    }

    public async findStudentsBySchool(idSchool: number){
        try {
            const schoolFound = await SchoolRepository.findOne({
                where: {
                    id: idSchool
                },
                relations: ["students"]
            })
            return schoolFound.students
        } catch (error) {
            console.log(error)
            throw new Error('Error to find students by school in service');
        }
    }

    async findStudentByRa(raStudent: string){
        try {
            const studentFound = await StudentRepository.findOne({
                where: {
                    ra: raStudent
                },
                relations: ["school"]
            })
            return studentFound
        } catch (error) {
            
        }
    }

}

export default new StudentService();