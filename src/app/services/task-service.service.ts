import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { TaskModel } from '../domain/taskModel';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	
	tasks: WritableSignal<Array<TaskModel>> = signal([] as Array<TaskModel>);
	count = signal(0);
	double = computed(() => {return this.count() * 2});
	
	getPercent = computed(() => this.tasks());

	increment() {
		this.count.update(c => c + 1);
	}

	constructor() {
		this.tasks.set([
				{
			name: "Abedul",
			description: "Aunque buscar como",
			creation_date: new Date("10/01/2024"),
			select: false
		},

		{
			name: "Baaaaka",
			description: "Aunque primero deberia",
			creation_date: new Date(),
			select: true
		},

		{
			name: "Cazador X",
			description: "Aunque primero como",
			creation_date: new Date("10/25/1997"),
			select: false
		}]);
	}

	save(item?: TaskModel): void {
		if(item !== undefined){
			this.tasks.update(tasks => [...tasks, item]);
		}
		localStorage.setItem('tasks', JSON.stringify(this.tasks()));
	}

	delete(task: TaskModel ,tasks: Array<TaskModel>) {
		tasks.filter(item => item.name != task.name);
		localStorage.setItem('tasks', JSON.stringify(this.tasks()));
	}
}
