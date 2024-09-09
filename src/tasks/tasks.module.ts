import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { tasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [tasksService]
})
export class TasksModule {}
