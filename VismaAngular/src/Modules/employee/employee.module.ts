import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { AppMaterialModule } from 'src/app/app.material.module';
import { RouterModule } from '@angular/router';
import { EmployeeViewerComponent } from './Components/employee-viewer/employee-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './Components/landing/landing.component';
import { AddEmployeeDialogComponent } from './Components/add-employee-dialog/add-employee-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeViewerComponent, LandingComponent, AddEmployeeDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: [EmployeeViewerComponent, LandingComponent]
})
export class EmployeeModule { }
