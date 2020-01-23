import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  // If this property is not private, any other component from the outside
  // that injects this service will be able to modify it
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
