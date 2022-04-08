import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url = 'http://localhost:9000/requests';

  constructor(private router: Router, private http: HttpClient) { }

  addRequest(bidderItem: any, ownerItem: any, bidderID: any, ownerID: any) {
    this.http.post(this.url + '/addRequest', {
      bidderItem: bidderItem,
      ownerItem: ownerItem,
      bidderID: bidderID,
      ownerID: ownerID,
    }).subscribe((res: any) => {
      this.router.navigate(['/']);
    });
  }

  getRequest(id:any) {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/'+id, {
      headers: header
    });
  }
  
  getRequestsFromUser(id:any) {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');      
    
    return this.http.get(this.url+'/user/'+id, {
      headers: header
    });
  }

  updateRequest(id:any, status:any, bidderItem: any, ownerItem: any) {
    this.http.put(this.url+'/'+id, {
      status: status,
      bidderItem: bidderItem.id,
      ownerItem: ownerItem.id
    }).subscribe((res: any) => {
      this.router.navigate(['/information/'+id]);
    });
  }
}
