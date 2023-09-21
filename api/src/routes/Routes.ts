import express, { Router } from "express"
import { SchoolController } from "../controller/SchoolController";
import { SchoolRepository } from "../repository/SchoolRepository";
import { SchoolService } from "../service/SchoolService";

export function createSchoolRouter(): Router {

    const schoolRepo = new SchoolRepository();
    const schoolService = new SchoolService(schoolRepo);
    const schoolController: SchoolController = new SchoolController(schoolService)
    
    const router: Router = express.Router();

    router.post('/schools', async (req, res) => {
        try {
            const school = await schoolController.create(req, res);
            res.json(school)
        } catch (error) {
            console.log(error)
        }
    });
    
    router.get('/schools', async (req, res) => {
        try {
            const schools = await schoolController.findAll(req, res);
            res.json(schools)
        } catch (error) {
            console.log(error)
        }
    });

    return router;
}

