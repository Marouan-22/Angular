import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }
  go(){
    return this.http.post('http://localhost:2105/adduser',{first:"test1",last: "test2"})
  }
}
