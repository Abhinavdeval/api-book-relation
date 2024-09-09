import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class tasksService{
    private tasks=[];

    getAllTasks(){
        
        return this.tasks;
    }

    getTaskById(id:string){
        return this.tasks.find((task)=> task.id == id);

    }

    createTasks(task){

        if (this.tasks.some(existingTask => existingTask.id === task.id)) {
            throw new BadRequestException(`Task with ID ${task.id} already exists`);
        }

        this.tasks.push(task);
        return { message: 'Task successfully created!', task };
    }

    updateTask(id:number,udatedTask){
        console.log(id,udatedTask);
        const taskIndex = this.tasks.findIndex((task)=> task.id === id);
        console.log(taskIndex);
        if(taskIndex> -1){
            this.tasks[taskIndex]= {...this.tasks[taskIndex], ...udatedTask};
            return { message: 'Task successfully updated!' };
        }
        return { message: 'Task not found!' };
    }
    
    deleteTask(id:number){
        console.log("deleted task id", id);
        const taskIndex = this.tasks.findIndex((task)=> task.id === id);
        console.log("deleted task index is", taskIndex)
        if(taskIndex> -1){
            this.tasks.splice(taskIndex,1);
            return { message: 'Task successfully Deleted!' };
        }
        return { message: 'Task not found!' };

    }
    
    
}

// function uuidv4(): any {
//     throw new Error("Function not implemented.");
// }
