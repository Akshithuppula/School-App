import { Component } from '@angular/core';
import { CreatestudentService } from '../createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

  public student:any = [];

 constructor(private createstudentService:CreatestudentService){}

 

}
