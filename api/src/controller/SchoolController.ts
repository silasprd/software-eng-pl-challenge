import { Request, Response } from "express";
import { SchoolService } from "../service/SchoolService";

export class SchoolController{

    schoolService = new SchoolService()

    public async findAll(req: Request, res: Response){
        const result = this.schoolService.findAll()
        return res.json(result)
    }

}
