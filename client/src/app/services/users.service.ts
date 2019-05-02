import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUserLog() {
    return this.http.get(this.apiUrl);
  }

  sectionStart(user) {
    return this.http.post(this.apiUrl, user);
  }

}
