import { Request, Response } from "express";
import ActivityService from "../service/ActivityService";

class ActivityController{

    public async handleCreate(req: Request, res: Response){
        try {
            const { describe, points, type, student } = req.body;
            const result = await ActivityService.createActivity({
                describe, 
                points, 
                type,
                student
            })
            res.status(201).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to create activity in controller' });
        }
    }

    public async handleFindAll(req: Request, res: Response){
        try {
            const result = await ActivityService.findAllActivities()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find activities in controller'})
        }
    }

    public async handleFindById(req: Request, res: Response){
        try {
            const { id } = req.params
            const result = await ActivityService.findActivityById(parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to find one activity in controller'})
        }
    }

    public async handleUpdateById(req: Request, res: Response){
        try {
            const { id } = req.params
            const { describe, points, type } = req.body
            const result = await ActivityService.updateActivityById({
                describe,
                points, 
                type
            }, parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to update activity in controller'})
        }
    }

    public async handleDeleteById(req: Request, res: Response){
        try {
            const { id } = req.params
            const result = await ActivityService.deleteActivityById(parseInt(id))
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error to delete activity in controller'})
        }
    }

}

export default new ActivityController();