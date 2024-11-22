import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './add-dialog.component.html',
  styleUrl: './add-dialog.component.scss'
})
export class AddDialogComponent {

  readonly dialogRef = inject(MatDialogRef<AddDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  name = "";
  description = "";
  
  constructor() {
    console.dir(this.data);
    if(this.data !== null) {
      this.name = this.data.name;
      this.description = this.data.description;
    }
  }

  setName(name: Event) {
    const target = name.target as HTMLInputElement;
    if(target){
      this.name = target.value;
    }
  }

  setDescription(description: Event) {
    const target = description.target as HTMLInputElement;
    if(target){
      this.description = target.value;
    }
  }

  create() {
    const creation = this.data?.creation_date ? this.data.creation_date : null;
    this.dialogRef.close({name: this.name, description: this.description, creation_date: creation});
  }
}
