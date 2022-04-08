import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url = 'http://localhost:9000/items';

  constructor(private router: Router, private http: HttpClient) {}

  getItems() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');   
    
    return this.http.get(this.url, {
      headers: header
    });
  }
  
  searchItem(name: any) {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/name/'+name, {
      headers: header
    });
  }
  
  getTags() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/tags', {
      headers: header
    });
  }

  getItem(id:any) {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/'+id, {
      headers: header
    });
  }

  getItemFromUser(id:any) {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/user/'+id, {
      headers: header
    });
  }

}
