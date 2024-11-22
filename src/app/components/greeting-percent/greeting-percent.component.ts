import {Component, inject} from '@angular/core';
import {MaterialModule} from '../../component/material/material.module';
import {CommonModule} from '@angular/common';
import {TaskService} from '../../services/task-service.service';

@Component({
	selector: 'app-greeting-percent',
	standalone: true,
	imports: [
		MaterialModule,
		CommonModule
	],
	templateUrl: './greeting-percent.component.html',
	styleUrl: './greeting-percent.component.scss'
})
export class GreetingPercentComponent {
	taskService = inject(TaskService)

	constructor() {
	}

	getPercent = () => Math.round(this.taskService.getPercent().filter(item => item.select	== true).length / this.taskService.getPercent().length * 100) || 0;

	createGreetingMessageByPercent(): string {
		const tens: number = Number(this.getPercent().toString().split('').at(0));
		switch (tens) {
			case 3:
				return "Lets go, vamos por otra";
			case 6:
				return "Come on, its getting easier"
			case 1:
				return "Great in done, i know you can do it"
			default:
				return String("You can do it");
		}
	}
}
