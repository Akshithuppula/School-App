import { Component } from '@angular/core';
import { CreatestudentService } from '../createstudent.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

 public studentForm:FormGroup = new FormGroup({
  name: new FormControl("",[Validators.required, Validators.minLength(3)]),
  class: new FormControl("",[Validators.required, Validators.min(0), Validators.max(100)]),
  fathername: new FormControl(),
  email: new FormControl(),
  bod: new FormControl(),
  // nested form
  address: new FormGroup({
    city: new FormControl(),
    state: new FormControl("",[Validators.required]),
    pincode: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
  }),
  // dynamic
  type: new FormControl(),
  busFee: new FormControl(),
  hostelFee: new FormControl(),
  // form Array
    marks: new FormArray([])
 });

 get marksFormArray(){
  return this.studentForm.get('marks') as FormArray;
 }

 addMarks(){
  this.marksFormArray.push(
    new FormGroup({
      class: new FormControl(),
      year: new FormControl(),
      percentage: new FormControl()
    })
    )
 }

 deleteMark(i:number){
  this.marksFormArray.removeAt(i);
 }



 constructor(private createstudentService:CreatestudentService){}

 submit(){
  console.log(this.studentForm);

  this.createstudentService.getCreateStudent(this.studentForm.value).subscribe(
    (data:any)=>{
      alert("student details created successfuly");
    },
    (err:any)=>{
      alert("student details creation failed");
    }
  )


  


  
 }
}


