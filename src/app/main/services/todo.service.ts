import { Injectable } from "@angular/core";
import { ToDo } from "../models/todo.model";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  fav: ToDo[] = [];
  todoList: ToDo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-15-2023')
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,
      isFavorite: false,
      date: new Date('5-15-2023')
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: false,
      isFavorite: false,
      date: new Date('6-15-2023')
    }
  ];

  constructor() {}

  deleteTodo(item: any) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.deleteTodoFav(item);


  }

  deleteTodoFav(item: any) {
    const favoriteData = localStorage.getItem('favorite');
    if (favoriteData) {
      const listFav = JSON.parse(favoriteData);
      let indexFav = listFav.indexOf(item);
      listFav.splice(indexFav, 1);
      localStorage.setItem("favorite", JSON.stringify(listFav));
    }
  }

  addTodo(toDoForm : {toDo: string}) {
    let id = this.todoList.length + 1;

    const item: ToDo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: toDoForm.toDo
    }
    this.todoList.unshift(item);
  }

  updateFav(){
    const favoriteData = localStorage.getItem('favorite');
    this.fav = favoriteData ? JSON.parse(favoriteData) : [];
  }
}
