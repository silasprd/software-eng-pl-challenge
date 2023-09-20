import { Router } from "express"
import { SchoolController } from "../controller/SchoolController";

export class Routes {
    private router = Router();
    private schoolController = new SchoolController();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.get('/schools', async (req, res) => await this.schoolController.findAll(req, res));
        this.router.post('/schools', async (req, res) => await this.schoolController.create(req, res));
        this.router.get('/schools/:cnpj', async (req, res) => await this.schoolController.findByCnpj(req, res));
        this.router.delete('/schools/:cnpj', async (req, res) => await this.schoolController.delete(req, res));
        this.router.put('/schools/:cnpj', async (req, res) => await this.schoolController.update(req, res));
    }

    getRouter(){
        return this.router;
    }
}

