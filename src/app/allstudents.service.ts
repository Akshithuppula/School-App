import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllstudentsService {

  constructor(private httpClient:HttpClient) { }

  getAllStudents():Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students");
  }
  


getfilterstudent(term:any):Observable<any>{
  return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter="+term);
}


getsortbystudent(column:any,order:any):Observable<any>{
  return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy="+column+"&order"+order);
}








// createstudent(data:any):Observable<any>{
//   return this.httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data);
// }


}

