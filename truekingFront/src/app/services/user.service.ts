import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:9000/users';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http.post(this.url + '/login', {email: email,pass: password})
    .subscribe((res: any) => {
      if (res.lenght === 0) {
        console.log('Invalid user');
      } else {
        localStorage.setItem('userID', res.id);
        this.router.navigate(['/']);
      }
    });
  }
  
  logout() {
    localStorage.removeItem('userID');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  getUser(id: any) {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/'+id, {
      headers: header
    });
  }

}
