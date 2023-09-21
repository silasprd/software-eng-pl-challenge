import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private httpClient: HttpClient
  ) { }

  findAllSchools(){
    return this.httpClient.get<any[]>("http://localhost:3000/schools")
  }
}
