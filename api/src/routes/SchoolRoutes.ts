import express, { Router } from "express"
import SchoolController from "../core/controller/SchoolController";


export function createSchoolRouter(): Router {

    const router: Router = express.Router();

    router.get('/', async (req, res) => await SchoolController.handleFindAll(req, res));

    router.post('/', async (req, res) => await SchoolController.handleCreate(req, res));

    router.get('/:id', async(req, res) => await SchoolController.handleFindById(req, res))  

    router.put('/:id', async (req, res) => await SchoolController.handleUpdateById(req, res));
    
    router.delete('/:id', async (req, res) => await SchoolController.handleDeleteById(req, res));

    return router;
}

