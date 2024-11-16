import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatDividerModule,
		MatChipsModule,
		MatDatepickerModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatDividerModule,
		MatChipsModule,
		MatDatepickerModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule
	]
})
export class MaterialModule {}
