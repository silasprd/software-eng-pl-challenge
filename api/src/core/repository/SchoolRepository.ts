import { School } from "../entity/School";
import { AppDataSource } from "../../data-source";

export const SchoolRepository = AppDataSource.getRepository(School).extend({

});