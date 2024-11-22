import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { TaskModel } from '../../domain/taskModel';
import { TaskService } from '../../services/task-service.service';
import { DatePipe } from '@angular/common';
import { AddDialogComponent } from './add/add-dialog/add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RemoveDialogComponent } from './remove/remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [
	  MaterialModule,
    DatePipe,
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent implements OnChanges {
  @Input() dateToFilter: Date | null = new Date();

	taskService = inject(TaskService);
  dialog = inject(MatDialog)

  onSelected() {

  }

  editTask(task: TaskModel) {
    console.dir(task);
    this.openDialog(true, task);
  }

  refresh() {
    this.taskService.fillTaskFromLocalStorage();
  }

  openDialog(isAddOrUpdate = true, taskToUpdate?: TaskModel) {
    if(isAddOrUpdate) {
      var dialogRef: MatDialogRef<AddDialogComponent>;
      if(taskToUpdate) {
        dialogRef = this.dialog.open(AddDialogComponent, {data: taskToUpdate, width: "600px", height: "400px"});
      } else {
        dialogRef = this.dialog.open(AddDialogComponent);
      }
      dialogRef.afterClosed().subscribe((data: TaskModel) => {
        if(data !== undefined && data.name && data.description) {
          const model: TaskModel = {
            creation_date: data.creation_date ? data.creation_date : new Date(),
            description: data.description,
            name: data.name,
            select: false,
            due_date: ""
          };

          if(taskToUpdate) {
            this.taskService.update(model);
          } else {
            this.taskService.save(model);
          }
        }
    });
    } else {
      const dialogRef = this.dialog.open(RemoveDialogComponent);
      dialogRef.afterClosed().subscribe((data: TaskModel) => {
        this.taskService.cleanAlreadyDone();
    });
    }  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dateToFilter'].currentValue !== null) {
      this.taskService.fillTaskFromLocalStorage();
      this.taskService.tasks.update(tk => tk.filter(a => { 
        if(a.creation_date && this.dateToFilter) {
          const b = new Date(a.creation_date).toISOString().substring(0,10) === this.dateToFilter.toISOString().substring(0,10);
          return b;
        }
        return false;
        })
      );
    }
  }
}
