import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { TaskModel } from '../domain/taskModel';

const NAME_ITEM_STORAGE = "tasks";

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	
	tasks: WritableSignal<Array<TaskModel>> = signal([] as Array<TaskModel>);
	
	getPercent = computed(() => this.tasks());

	constructor() {
		this.fillTaskFromLocalStorage();
	}

	fillTaskFromLocalStorage() {
		const items = localStorage.getItem(NAME_ITEM_STORAGE);
		if(items) {
			this.tasks.update(() => (JSON.parse(items) as Array<TaskModel>));
		}
	}

	update(item: TaskModel) {
		const byDateFound = this.tasks().find(i => i.creation_date === item.creation_date);
		if(byDateFound === undefined) {
			throw new Error("Not found item to update");
		} else {		
			byDateFound.name = item.name;
			byDateFound.description = item.description;
			this.tasks.update(tasks => tasks.filter(task => task.creation_date !== item.creation_date));
			this.save(byDateFound);
		}
	}

	save(item?: TaskModel): void {
		if(item !== undefined){
			this.tasks.update(tasks => [...tasks, item]);
		}
		localStorage.setItem('tasks', JSON.stringify(this.tasks()));
	}

	cleanAlreadyDone() {
		this.tasks.update(tasks => tasks.filter(task => !task.select));
		this.save();
	}
}
