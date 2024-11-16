import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ElementDataSource } from './element-data-source';
import {MaterialModule} from '../material/material.module';
import {SelectionModel} from '@angular/cdk/collections';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-global-table',
  standalone: true,
  imports: [
	  MaterialModule,
	  CommonModule,
	  FormsModule
  ],
  templateUrl: './global-table.component.html',
  styleUrl: './global-table.component.scss'
})

export class GlobalTableComponent<T> implements AfterViewInit {

  @Input() displayedColumns: Array<string> = [];
  @Input() dataSource!: ElementDataSource<T>;
  @Input() displayedItemInArray!: string;
  @Output() element = new EventEmitter();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<T>(true, []);

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.propertiesNames;
  }

  getElement(element: any, property: string): string | T {
    if (Array.isArray(element[property])) {
      let itemsName: string = "";
      const length = element[property].length;

      for (let index = 0; index < length; index++) {
        itemsName += element[property][index][this.displayedItemInArray] + (length > 1 && index != length - 1 ? " , " : "");
      }
      return itemsName;
    }
    else {
      return element[property];
    }
  }

  showItem(item: T) {
    console.log(item);
    this.element.emit(item);
  }
}
