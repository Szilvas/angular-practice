import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jsonUrl: string = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.jsonUrl}/${id}`);
  }

  //create - létrehoz - post-nak 2 paraméter kell - hova, mit
  create(user: User): Observable<User> {
    return this.http.post<User>(this.jsonUrl, user);
  }

  //update - put-nak 2 paraméter kell - hol, mi alapján, mit
  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.jsonUrl}/${user.id}`, user);
  }

  //delete - 
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.jsonUrl}/${id}`);
  }
}
