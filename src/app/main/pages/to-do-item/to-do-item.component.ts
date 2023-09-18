import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoComponent implements OnInit {
  @Input() toDoInput!: ToDo;

  completed: boolean = false;
  toDo!: ToDo;

  constructor(public toDoService: ToDoService, private toasterService: ToastrService) { }

  ngOnInit(): void {

  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
  }

  onCliCk(e: any) {
    console.log("Clicked");
    console.log(e);
  }

  toggleClass() {
    if (this.completed) {
      return { 'list-group-item-success': this.completed, 'border-primary': this.completed };
    } else {
      return null;
    }
  }

  deleteTodo(item: ToDo) {
    this.toDo = item;
    this.toDoService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  }
  isFavorite() {
    this.toDoInput.isFavorite = !this.toDoInput.isFavorite;
    if (this.toDoInput.isFavorite) {

      this.toasterService.success('Todo Added to Favorite');

      this.toDoService.fav.unshift(this.toDoInput);

      localStorage.setItem("favorite", JSON.stringify(this.toDoService.fav));

    }
    else {
      this.toasterService.error('Todo Removed from Favorite');
      let index = this.toDoService.todoList.indexOf(this.toDo);
      this.toDoService.fav.splice(index, 1);

      localStorage.setItem("favorite", JSON.stringify(this.toDoService.fav));

    }
  }
}
