import { Request, Response } from "express";
import StudentService from "../service/StudentService";


class StudentController{

    public async handleCreate(req: Request, res: Response){
        try {
            const { ra, name, totalScore, school } = req.body;
            const result = await StudentService.createStudent({
                ra, 
                name, 
                totalScore,
                school
            })
            res.status(201).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to create student in controller' });
        }
    }

    public async handleFindAll(req: Request, res: Response){
        try {
            const result = await StudentService.findAllStudents()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find students in controller'})
        }
    }

    public async handleFindById(req: Request, res: Response){
        try {
            const { id } = req.params
            const result = await StudentService.findStudentById(parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find one student in controller'})
        }
    }

    public async handleUpdateById(req: Request, res: Response){
        try {
            const { id } = req.params
            const { ra, name, school } = req.body
            const result = await StudentService.updateStudentById({
                ra,
                name, 
                school
            }, parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find student in controller'})
        }
    }

    public async handleDeleteById(req: Request, res: Response){
        try {
            const { id } = req.params
            const result = await StudentService.deleteStudentById(parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to delete student in controller'})
        }
    }

    public async handleFindBySchool(req: Request, res: Response){
        try {
            const { idSchool } = req.params
            const result = await StudentService.findStudentsBySchool(parseInt(idSchool))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find students by school in controller'})
        }
    }
}

export default new StudentController();