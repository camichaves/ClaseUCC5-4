import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { }

  getPosts(){
    // https://jsonplaceholder.typicode.com/posts
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
