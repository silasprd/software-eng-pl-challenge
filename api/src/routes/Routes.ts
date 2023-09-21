import express, { Router } from "express"
import { SchoolController } from "../controller/SchoolController";

export default class Routes {

    constructor(private readonly schoolController: SchoolController){
        this.initializeRoutes()
    }

    private router: Router = express.Router();

    private initializeRoutes(){
        this.router.get('/schools', async (req, res) => {
            try {
                const schools = await this.schoolController.findAll(req, res);
                res.json(schools)
            } catch (error) {
                console.log(error)
            }
        });
        this.router.post('/schools', async (req, res) => {
            try {
                const school = await this.schoolController.create(req, res);
                res.json(school)
            } catch (error) {
                console.log(error)
            }
        });
    }

    getRouter(){
        return this.router;
    }
}

