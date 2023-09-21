import express, { Router } from "express"
import SchoolController from "../core/controller/SchoolController";


export function createSchoolRouter(): Router {

    const router: Router = express.Router();

    router.get('/', async (req, res) => {
        const schools = await SchoolController.handleFindAll(req, res);
        res.json(schools)  
    });

    router.post('/', async (req, res) => {
        const school = await SchoolController.handleCreate(req, res);
        res.json(school)  
    });

    router.get('/:id', async(req, res) => {
        const school = await SchoolController.handleFindById(req, res);
        res.json(school)
    })  

    router.put('/:id', async (req, res) => {
        const school = await SchoolController.handleUpdateById(req, res);
        res.json(school)  
    });
    
    router.delete('/:id', async (req, res) => {
        const school = await SchoolController.handleDeleteById(req, res);
        res.json(school)  
    });

    return router;
}

