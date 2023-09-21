import express, { Router } from "express";
import StudentController from "../core/controller/StudentController";

export function createStudentRouter(): Router {

    const router: Router = express.Router();

    router.post('/', async (req, res) => {
        const student = await StudentController.handleCreate(req, res);
        res.json(student)  
    });

    router.get('/', async (req, res) => {
        const students = await StudentController.handleFindAll(req, res);
        res.json(students)  
    });

    router.get('/:id', async (req, res) => {
        const student = await StudentController.handleFindById(req, res);
        res.json(student)  
    });

    router.put('/:id', async (req, res) => {
        const student = await StudentController.handleUpdateById(req, res);
        res.json(student)  
    });
    
    router.delete('/:id', async (req, res) => {
        const student = await StudentController.handleDeleteById(req, res);
        res.json(student)  
    });

    return router
    
}