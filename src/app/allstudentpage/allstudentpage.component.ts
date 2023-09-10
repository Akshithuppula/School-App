import { Component } from '@angular/core';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-allstudentpage',
  templateUrl: './allstudentpage.component.html',
  styleUrls: ['./allstudentpage.component.css']
})
export class AllstudentpageComponent {

  public student:any=[];
constructor (private allstudentsService:AllstudentsService){
  allstudentsService.getAllStudents().subscribe(
    (data:any)=>{
      this.student = data;
    },
    (err:any)=>{
      alert("Internal server error ")
    }
  )
}

}
