import { Component, inject, OnInit, signal, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { APIResponseModel, IDepartment, IFaculty } from '../../model/model';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { FacultyService } from '../../services/faculty.service';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe , JsonPipe , CommonModule],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css', '../../../styles.css']
})
export class DepartmentComponent implements OnInit {

  departmentForm: FormGroup = new FormGroup({

    id: new FormControl(0),
    departmentName: new FormControl(""),
    code: new FormControl(""),
    faculty : new FormControl(null),
  });



  departmentService = inject(DepartmentService);
  facultyService = inject(FacultyService);

  departmentList : IDepartment[] =[];
  facultyList: IFaculty[] = [];
  
  isEditMode: boolean = false; 
 


  ngOnInit(): void {
    //load table
    this.loadDepartment();
   
    console.log("department list is loaded.");
    
    //load faculty list
    this.loadfaculty();
  
  }


  loadDepartment(){
    this.departmentService.getAllDepartments().subscribe(
      (response) => {
        this.departmentList = response;
        console.log(this.departmentList);
      },
      (error) => {
        console.error('Error fetching department:', error);
      }
    );     
  }


  loadfaculty(){
    this.facultyService.getAllFaculties().subscribe(
      (response) => {
        console.log('API Response:', response);  
        console.log('Data:', response.data);     
        this.facultyList = response.data;
      },
      (error) => {
        console.error('Error fetching faculty:', error);
      }
    );     
  }


  onSaveDepartment() : void{
    const formValue = this.departmentForm.value;
    console.log('Form value: ', formValue);

    
      this.departmentService.createDepartment(formValue).subscribe(
        (res: IDepartment) => {
          console.log("Department created successfully.", res);
          this.departmentForm.reset();
          this.loadDepartment();
  
        }, 
      (error)=> {
        alert("Not created!");
        console.error("Error creating department: ", error);
      })
  
    
     

    
   
  }

 

  //to load the info to the form
  onEdit(department: IDepartment): void {
  


    //adding the selected row values to form
    this.departmentForm.setValue({
      id: department.id,
      departmentName: department.departmentName,
      code: department.code,
      faculty: department.faculty,
    });

    this.isEditMode = true;
    
  }

  onDelete(id: number):void {
    let isDelete = confirm("Are you sure you want to delete this entry?");

    if(isDelete){
      this.departmentService.deleteDepartment(id).subscribe(
        (res: any) => {
          console.log("Department deleted successfully: ", res );
          this.loadDepartment();
        },
        (error)=> {
          console.error("Error deleting department: " ,error);
          this.loadDepartment();
        }
      )
    }
  }




}
