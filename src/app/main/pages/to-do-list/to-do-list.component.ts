import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from '../to-do-form/to-do-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  isFavoriteView: boolean = false;
  constructor(public todoService: ToDoService, private _dialog: MatDialog,  public route: ActivatedRoute) { }


  ngOnInit(): void {
     this.route.url.subscribe(data => {
    // console.log(data[0].path);
    if (data[0].path == 'list') {
      this.isFavoriteView = false;
    }
    else {
      this.isFavoriteView = true;
      this.todoService.updateFav();
    }
  })
  }

  addNewItem(){
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(TodoFormComponent, {
        autoFocus: false,
        panelClass: 'custom-detail-dialog'
    });
    dialogRef.afterClosed().subscribe();
}

}
