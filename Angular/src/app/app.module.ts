import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {EmployeeService} from "./shared/employee.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {DxDataGridModule} from "devextreme-angular"

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DxDataGridModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
