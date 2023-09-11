import { Component } from '@angular/core';
import { CreatestudentService } from '../createstudent.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

 public studentForm:FormGroup = new FormGroup({
  name: new FormControl(),
  class: new FormControl(),
  fathername: new FormControl(),
  email: new FormControl(),
  bod: new FormControl(),
  address: new FormGroup({
    city: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl()
  })
 });

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


