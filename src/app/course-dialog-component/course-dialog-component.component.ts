import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.css']
})
export class CourseDialogComponentComponent implements OnInit {

  food: string;
  commentFC = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onNoClick(): void {
    this.dialogRef.close({
      food: this.food
    });
  }

 

  close() {
      this.dialogRef.close();
  }
}
