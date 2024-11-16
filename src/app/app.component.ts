import { Component, model } from '@angular/core';
import {TaskManagerComponent} from './component/task-manager/task-manager.component';
import {MaterialModule} from './component/material/material.module';
import {GreetingPercentComponent} from './components/greeting-percent/greeting-percent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
	  MaterialModule,
	  GreetingPercentComponent,
	  TaskManagerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tmanager';
  longText = " ";
  selected = model<Date | null>(null);

}
