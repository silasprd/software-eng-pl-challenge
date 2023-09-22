import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  findAllStudents(){
    return this.httpClient.get<any[]>("http://localhost:3000/students")
  }

  findStudentsBySchool(idSchool: number){
    return this.httpClient.get<any[]>(`http://localhost:3000/students/school/${idSchool}`)
  }
}
