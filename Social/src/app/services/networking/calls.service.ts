/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private http: HttpClient) { }
}
