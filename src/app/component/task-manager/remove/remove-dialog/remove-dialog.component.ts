import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog',
  standalone: true,
  imports: [
        MaterialModule
  ],
  templateUrl: './remove-dialog.component.html',
  styleUrl: './remove-dialog.component.scss'
})
export class RemoveDialogComponent {

  readonly dialogRef = inject(MatDialogRef<RemoveDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  delete() { 
    this.dialogRef.close(true);
  }
}
