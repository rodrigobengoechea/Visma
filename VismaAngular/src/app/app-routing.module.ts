import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeViewerComponent } from 'src/Modules/Employee/Components/employee-viewer/employee-viewer.component';
import { LandingComponent } from 'src/Modules/Employee/Components/landing/landing.component';
import { EmployeeModule } from 'src/Modules/Employee/employee.module';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'employees', component: EmployeeViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
