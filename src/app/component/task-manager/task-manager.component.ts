import { Component, inject } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {GlobalTableComponent} from '../global-table/global-table.component';
import {ElementDataSource} from '../global-table/element-data-source';
import {TaskModel} from '../../domain/taskModel';
import {TaskService} from '../../services/task-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [
	  MaterialModule,
	  GlobalTableComponent,
    DatePipe
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent {

	taskService = inject(TaskService);

  onSelected() {
    this.taskService.save();
  }

  editTask(task: TaskModel) {
    console.dir(task);
  }
}
