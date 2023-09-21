import { AppDataSource } from "../../data-source";
import { Activity } from "../entity/Activity";

export const ActivityRepository = AppDataSource.getRepository(Activity).extend({
    
})