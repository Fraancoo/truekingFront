import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  public userID = localStorage.getItem('userID');
  public requestsIDs = [];
  public requests = [];

  constructor(private route:Router, private requestService:RequestsService) { }

  ngOnInit() {
    this.requestService.getRequestsFromUser(this.userID).subscribe((res : any) => {
      this.requestsIDs = res;
      for (let i = 0; i < this.requestsIDs.length; i++) {
        this.requestService.getRequest(this.requestsIDs[i].id).subscribe((res : any) => {
          this.requests[i] = res;
        });
      }
    });
  }

  seeOffer(id){
    this.route.navigate(['/offers/'+id]);
  }

}
