import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}
  getTodos() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
