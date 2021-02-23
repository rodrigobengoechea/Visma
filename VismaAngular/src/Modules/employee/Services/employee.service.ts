import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { EmployeeViewModel } from 'src/Modules/Shared/ViewModels/employee';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(protected http: HttpClient) { }

  private baseUrl = 'http://localhost:5000/api/employee/';

  handleError(httpError: HttpErrorResponse){
    return throwError(httpError.error);
  }

  getEmployees(): Observable<Array<EmployeeViewModel>>{
    return this.http.get<Array<EmployeeViewModel>>(this.baseUrl + 'getAll').pipe(catchError(this.handleError));
  }

  saveEmployee(employee: EmployeeViewModel): Observable<any>{
    return this.http.post(this.baseUrl + 'add', employee).pipe(catchError(this.handleError));
  }
}
