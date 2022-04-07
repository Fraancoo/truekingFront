import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  public id = <string>this.activeRoute.snapshot.params.id;
  public bidder = [];
  public bidderItem = [];
  public owner = [];
  public ownerItem = [];

  constructor(private activeRoute:ActivatedRoute, private requestService:RequestsService) { }

  ngOnInit() {
    this.requestService.getRequest(this.id).subscribe((res : any) => {
      this.bidder = res.bidder;
      this.bidderItem = res.bidderItem;
      this.owner = res.owner;
      this.ownerItem = res.ownerItem;
    });
  }

  replyOffer(status) {
    this.requestService.updateRequest(this.id, status, this.bidderItem, this.ownerItem);
  }

}
