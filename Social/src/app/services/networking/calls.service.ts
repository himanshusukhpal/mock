/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private http: HttpClient) { }

  postRequest(data){
    return this.http.post('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json',data);
        };
  }

