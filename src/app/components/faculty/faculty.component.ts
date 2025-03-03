import { Component, inject, OnInit, signal, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FacultyService } from '../../services/faculty.service';
import { APIResponseModel, IFaculty } from '../../model/model';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css','../../../styles.css']
})
export class facultyComponent implements OnInit {

  facultyForm: FormGroup = new FormGroup({

    id: new FormControl(0),
    facultyName: new FormControl("",[Validators.required]),
    code: new FormControl("",[Validators.required, Validators.maxLength(4)]),
  });



  facultyService = inject(FacultyService);

  facultyList : IFaculty[] =[];
  
  isEditMode: boolean = false; 
  
  
  ngOnInit(): void {
    //load table
    this.loadfaculty();
    console.log(this.facultyList);
    console.log("faculty list is loaded.")
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



  onSaveFaculty() : void{
    const formValue = this.facultyForm.value;
    console.log('Form value: ', formValue);

    this.facultyService.createFaculty(formValue).subscribe(
      (res: APIResponseModel<IFaculty>) => {
        console.log("Faculty created successfully.", res);
        this.facultyForm.reset();
        this.loadfaculty();

      }, 
    (error)=> {
      console.error("Error creating faculty: ", error);
    })
  }

 

  // onUpdateFaculty(): void {
  //   const formValue = this.facultyForm.value;
  //   console.log('Form value: ', formValue);

  //   this.facultyervice.updateFaculty(formValue).subscribe(
  //     (res: APIResponseModel<IFaculty>)=> {
  //       console.log("Faculty updated successfully ", res );
  //       this.facultyForm.reset();
  //       //switch to save button again
  //       this.isEditMode = false;
  //       this.loadfaculty();
  //     },
  //     (error)=> {
  //       console.error("Error updating faculty: ", error);
  //     }
  //   )
  // }



  //to load the info to the form
  onEdit(faculty: IFaculty): void {

    //adding the selected row values to form
    this.facultyForm.setValue({
      id: faculty.id,
      facultyName: faculty.facultyName,
      code: faculty.code
    });

    this.isEditMode = true;
    
  }

  onDelete(id: number):void {
    let isDelete = confirm("Are you sure you want to delete this entry?");

    if(isDelete){
      this.facultyService.deleteFaculty(id).subscribe(
        (res: APIResponseModel<string>) => {
          console.log("Faculty deleted successfully: ", res );
          this.loadfaculty();
        },
        (error)=> {
          console.error("Error deleting faculty: " ,error);
        }
      )
    }
  }




}
