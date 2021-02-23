import { Component, OnInit } from '@angular/core';
import { EmployeeViewModel } from 'src/Modules/Shared/ViewModels/employee';
import { Subscription, timer } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../Services/employee.service';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.css']
})
export class EmployeeViewerComponent implements OnInit {
  
  timer : any;  
  subscription: Subscription = new Subscription;

  displayedColumns = ['firstName', 'lastName', 'socialSecurityNumber', 'phone'];
  dataSource = new MatTableDataSource<EmployeeViewModel>();

  constructor(private _service: EmployeeService, private dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const self = this;
    this.timer = timer(0, 2000);    

    this.subscription = this.timer.subscribe(() =>{      
      self._service.getEmployees().subscribe(res=> {
        self.dataSource.data = res;
        console.log(self.dataSource.data);
      }, error => {
        console.log(error.message);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog():void{    
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {width:'500px'});

    dialogRef.afterClosed().subscribe(result =>{      
      
      if(result != null){
        this.showMessage(result);
      }
      else{
        this.showMessage('Added employee!');
      }
    })    
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}
