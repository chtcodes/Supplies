import { Component, inject, OnInit, signal, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DesignationsService } from '../../services/designations.service';
import { APIResponseModel, IDesignation } from '../../model/model';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-designations',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe , JsonPipe , CommonModule],
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css', '../../../styles.css']
})
export class DesignationsComponent implements OnInit {

  designationForm: FormGroup = new FormGroup({

    id: new FormControl(0),
    designationName: new FormControl("", [Validators.required]),
    grade: new FormControl("", [Validators.required]),
    code: new FormControl("", Validators.maxLength(5)),
  });



  designationService = inject(DesignationsService);

  designationsList : IDesignation[] =[];
  
  isEditMode: boolean = false; 
  
  
  ngOnInit(): void {
    //load table
    this.loadDesignations();
    console.log(this.designationsList);
    console.log("designation list is loaded.")
  }


  loadDesignations(){
    this.designationService.getAllDesignations().subscribe(
      (response) => {
        console.log('API Response:', response);  
        console.log('Data:', response.data);     
        this.designationsList = response.data;
      },
      (error) => {
        console.error('Error fetching designations:', error);
      }
    );     
  }



  onSaveDesignation() : void{
    const formValue = this.designationForm.value;
    console.log('Form value: ', formValue);

    this.designationService.createDesignation(formValue).subscribe(
      (res: APIResponseModel<IDesignation>) => {
        console.log("Designation created successfully.", res);
        this.designationForm.reset();
        this.loadDesignations();

      }, 
    (error)=> {
      console.error("Error creating designation: ", error);
    })
  }

 

  // onUpdateDesignation(): void {
  //   const formValue = this.designationForm.value;
  //   console.log('Form value: ', formValue);

  //   this.designationService.updateDesignation(formValue).subscribe(
  //     (res: APIResponseModel<IDesignation>)=> {
  //       console.log("Designation updated successfully ", res );
  //       this.designationForm.reset();
  //       //switch to save button again
  //       this.isEditMode = false;
  //       this.loadDesignations();
  //     },
  //     (error)=> {
  //       console.error("Error updating designation: ", error);
  //     }
  //   )
  // }



  //to load the info to the form
  onEdit(designation: IDesignation): void {

    //adding the selected row values to form
    this.designationForm.setValue({
      id: designation.id,
      designationName: designation.designationName,
      grade: designation.grade,
      code: designation.code,
    });

    this.isEditMode = true;
    
  }

  onDelete(id: number):void {
    let isDelete = confirm("Are you sure you want to delete this entry?");

    if(isDelete){
      this.designationService.deleteDesignation(id).subscribe(
        (res: APIResponseModel<string>) => {
          console.log("Designation deleted successfully: ", res );
          this.loadDesignations();
        },
        (error)=> {
          console.error("Error deleting designation: " ,error);
        }
      )
    }
  }




}
