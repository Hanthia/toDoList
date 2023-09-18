import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['to-do-form.component.scss' ]
})
export class TodoFormComponent implements OnInit {
  toDoForm!: FormGroup;

  constructor(public toDoService: ToDoService, private fb: FormBuilder,  private dialogRef: MatDialogRef<TodoFormComponent>,) { }

  ngOnInit(): void {
     this.toDoForm = this.fb.group({
      toDo: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.toDoService.addTodo(this.toDoForm.value);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
