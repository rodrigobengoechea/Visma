import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../Services/employee.service';
import { EmployeeViewerComponent } from '../employee-viewer/employee-viewer.component';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})
export class AddEmployeeDialogComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<EmployeeViewerComponent>,
      private _service: EmployeeService) {      
        
        this.employeeForm = this.fb.group({
          firstName: ['', Validators.required],          
          lastName: ['', Validators.required],          
          socialSecurityNumber: ['',Validators.required],
          phone: ['']
        });
  }

  ngOnInit(): void {     
    
  }
  
  onSubmit(formData: any) {
    const employee = formData.value;        

    this._service.saveEmployee(employee).subscribe(
      data => {
        // Success
        if (data.success) {
          this.dialogRef.close();
        } else {
          this.dialogRef.close(data.errorMessage);
        }
      },
      error => {
        this.dialogRef.close(error.message);
      }
    );    
  }

  close() {      
      this.dialogRef.close();
  }
}
