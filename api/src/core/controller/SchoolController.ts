import { Request, Response } from "express";
import SchoolService from "../service/SchoolService";

class SchoolController{

    public async handleFindById(req: Request, res: Response){
        try {
            const { id } = req.params
            const result = await SchoolService.findById(parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find one school in controller'})
        }
    }

    public async handleCreate(req: Request, res: Response){
        try {
            const { cnpj, name, type } = req.body;
            const result = await SchoolService.createSchool({
                cnpj, 
                name, 
                type
            })
            res.status(201).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to create school in controller' });
        }
    }

    public async handleFindAll(req: Request, res: Response){
        try {
            const result = await SchoolService.findAllSchools()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find schools in controller'})
        }
    }

    public async handleUpdateById(req: Request, res: Response){
        try {
            const { id } = req.params
            const { cnpj, name, type } = req.body
            const result = await SchoolService.updateById({
                cnpj,
                name, 
                type
            }, parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find schools in controller'})
        }
    }

    public async handleDeleteById(req: Request, res: Response){
        try {
            const { id } = req.params
            const result = await SchoolService.deleteById(parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to delete school in controller'})
        }
    }

}

export default new SchoolController();
