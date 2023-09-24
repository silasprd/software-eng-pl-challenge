import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateActivity } from 'src/app/model/CreateActivity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createActivity(activity: CreateActivity) {
    return this.httpClient.post("http://localhost:3000/activities", activity)
  }
}
