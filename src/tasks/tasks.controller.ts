import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { tasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: tasksService){
        

    }
    @Get()
    getAllTasks(){
        
        return this.tasksService.getAllTasks()
    }

    @Get(':id')
    getTaskById(@Param('id') id:string){
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTasks(@Body() task){
        return this.tasksService.createTasks(task)
    }

    @Put(':id')
    updateTask(@Param('id') id: number, @Body() task){
        return this.tasksService.updateTask(id,task)
    }

    @Delete(':id')
    deleteTask(@Param('id') id:number){
        return this.tasksService.deleteTask(id)
    }
    
   
}
