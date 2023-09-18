import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './pages/to-do-form/to-do-form.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { NotFoundComponent } from './shared/components/not-found-component/not-found-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'add', component: TodoFormComponent},
  {path: 'list', component: ToDoListComponent},
  {path: 'favorite', component: ToDoListComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
