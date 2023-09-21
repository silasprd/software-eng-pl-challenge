import { Request, Response } from "express";
import { SchoolService } from "../service/SchoolService";

export class SchoolController{

    constructor(private schoolService: SchoolService){}

    public async findAll(req: Request, res: Response){
        const result = this.schoolService.findAll()
        res.json(result)
    }

    public async create(req: Request, res: Response){
        const school = req.body
        const createdSchool = this.schoolService.create(school)
        res.status(201).json(createdSchool)
    }

    public async findByCnpj(req: Request, res: Response){
        const { id } = req.params
        const school = await this.schoolService.findById(parseInt(id))
        if(school){
            res.json(school)
        } else {
            res.status(404).json({message: 'School not found!'})
        }
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params
        const school = await this.schoolService.deleteById(parseInt(id))
        res.status(200).json(school)
    }

    public async update(req: Request, res: Response){
        const { id } = req.params
        const school = await this.schoolService.updateById(req.body, parseInt(id))
        res.status(200).json(school)
    }

}
