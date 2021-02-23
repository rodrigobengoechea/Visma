import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../Modules/Shared/shared.module';
import { AppMaterialModule } from './app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeModule } from 'src/Modules/Employee/employee.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,    
    AppRoutingModule,
    FlexLayoutModule,    
    AppMaterialModule,
    SharedModule,
    EmployeeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
