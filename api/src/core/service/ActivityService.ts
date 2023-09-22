import { CreateActivityType, UpdateActivityType } from "../../utils/types/ActivityType";
import { ActivityRepository } from "../repository/ActivityRepository";
import { StudentRepository } from "../repository/StudentRepository";

class ActivityService {

    
    public async findAllActivities(){
        try {
            const activitiesFound = await ActivityRepository.find({
                relations: ["student"]
            })
            return activitiesFound
        } catch (error) {
            console.log(error)
            throw new Error('Error to list schools in service');
        }
    }

    public async createActivity({describe, points, type, student}: CreateActivityType){
        try {
            if (!student || !student.id) {
                throw new Error('Invalid student data');
            }

            const studentId = student.id
            const studentFound = await StudentRepository.findOne({
                where: {
                    id: studentId
                },
                relations: ["activities"] 
            });

            if(!studentFound){
                throw new Error('Student not found');
            }

            const createdActivity = ActivityRepository.create({
                describe,
                points,
                type,
                student: studentFound,
            });

            const savedActivity = await ActivityRepository.save(createdActivity)

            if(!studentFound.activities) studentFound.activities = []

            studentFound.activities.push(savedActivity);

            studentFound.totalScore = studentFound.activities.reduce((total, activity) => total + activity.points, 0)

            await StudentRepository.save(studentFound)

            return savedActivity
        } catch (error) {
            console.log(error)
            throw new Error('Error to create student in service');
        }
    }

    public async findActivityById(id: number){
        try {
            const activityFound = await ActivityRepository.findOne({
                where: {
                    id: id
                },
                relations: ["student"]
            })
            return activityFound
        } catch (error) {
            console.log(error)
            throw new Error('Error to find one activity in service');
        }
    }

    public async updateActivityById({describe, points, type}: UpdateActivityType, id: number){
        try {
            const activityToUpdate = await ActivityRepository.findOne({
                where: {
                    id: id
                }
            })

            activityToUpdate.describe = describe
            activityToUpdate.points = points
            if (type) activityToUpdate.type = type
            
            const activityUpdated = await ActivityRepository.save(activityToUpdate)
            return activityUpdated
        } catch (error) {
            console.log(error)
            throw new Error('Error to update activity in service');
        }
    }

    public async deleteActivityById(id: number){
        try {
            const activityFound = await ActivityRepository.findOne({
                where: {
                    id: id
                }
            })
            const activityToDelete = await ActivityRepository.delete(activityFound)
            return activityToDelete
        } catch (error) {
            console.log(error)
            throw new Error('Error to delete activity in service');
        }
    }

}

export default new ActivityService()