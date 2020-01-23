import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  // If this property is not private, any other component from the outside
  // that injects this service will be able to modify it
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  // createTask(title: string, description: string): Task {
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
