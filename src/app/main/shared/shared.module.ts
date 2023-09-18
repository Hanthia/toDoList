// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';
import { MaterialModule } from './material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';

// Pipes



const _modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule
];

const _declarations = [
  NotFoundComponent,
  CustomDialogComponent
];

@NgModule({
  declarations: [..._declarations],
  imports: [..._modules],
  exports: [..._declarations, ..._modules],
  providers: [
    {
        provide: MatDialogRef,
        useValue: {}
    }
]
})
export class SharedModule {}
