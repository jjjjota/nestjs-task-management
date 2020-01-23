import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  // If this property is not private, any other component from the outside
  // that injects this service will be able to modify it
  private tasks = [];

  getAllTasks () {
    return this.tasks;
  }
}
