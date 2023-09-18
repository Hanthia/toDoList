// Modules
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from '../main/main-routing.module';
import { SharedModule } from './shared/shared.module';

// Layouts
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

// components
import { ToDoComponent } from './pages/to-do-item/to-do-item.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { TodoFormComponent } from './pages/to-do-form/to-do-form.component';


@NgModule({
  declarations: [
    AppLayoutComponent,
    ToDoComponent,
    ToDoListComponent,
    TodoFormComponent
  ],
  imports: [MainRoutingModule, CommonModule, SharedModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {}
