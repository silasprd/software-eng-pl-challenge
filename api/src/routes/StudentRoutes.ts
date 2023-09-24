import express, { Router } from "express";
import StudentController from "../core/controller/StudentController";

export function createStudentRouter(): Router {

    const router: Router = express.Router();

    router.post('/', async (req, res) => await StudentController.handleCreate(req, res));

    router.get('/', async (req, res) => await StudentController.handleFindAll(req, res));

    router.get('/:id', async (req, res) => await StudentController.handleFindById(req, res));

    router.get('/ra/:raStudent', async (req, res) => await StudentController.handleFindByRa(req, res));

    router.get('/school/:idSchool', async (req, res) => await StudentController.handleFindBySchool(req, res));

    router.put('/:id', async (req, res) => await StudentController.handleUpdateById(req, res));
    
    router.delete('/:id', async (req, res) => await StudentController.handleDeleteById(req, res));

    return router
    
}