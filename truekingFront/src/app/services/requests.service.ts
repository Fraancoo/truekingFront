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
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
