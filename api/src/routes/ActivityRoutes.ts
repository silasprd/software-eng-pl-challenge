import express, { Router } from "express";
import ActivityController from "../core/controller/ActivityController";

export function createActivityRouter(): Router {

    const router = express.Router()

    router.post('/', async (req, res) => {
        const activity = await ActivityController.handleCreate(req, res);
        res.json(activity)  
    });

    router.get('/', async (req, res) => {
        const activities = await ActivityController.handleFindAll(req, res);
        res.json(activities)  
    });

    router.get('/:id', async (req, res) => {
        const activity = await ActivityController.handleFindById(req, res);
        res.json(activity)  
    });

    router.put('/:id', async (req, res) => {
        const activity = await ActivityController.handleUpdateById(req, res);
        res.json(activity)  
    });

    router.delete('/:id', async (req, res) => {
        const activity = await ActivityController.handleDeleteById(req, res);
        res.json(activity)  
    });

    return router;
}