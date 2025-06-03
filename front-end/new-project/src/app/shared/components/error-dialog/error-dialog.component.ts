import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.css',
})

export class ErrorDialogComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: string){}


}
