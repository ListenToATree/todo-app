import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <mat-form-field class="example-form-field">
      <mat-label>Clearable input</mat-label>
      <input matInput type="text" [(ngModel)]="value">
      <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
    <button mat-button (click)="addTodo(value)">Add</button>
  `,
  styles: [
    '.example-form-field {margin: 20px;}'
  ],
})
export class AddTodoComponent implements OnInit {
  value: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addTodo(value: string) {
    if (!!value) {
      console.log(value);
    }
  }
}
