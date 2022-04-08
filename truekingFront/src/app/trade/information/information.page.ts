import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  public id = <string>this.activeRoute.snapshot.params.id;
  public bidderItem = [];
  public ownerItem = [];

  constructor(
    private route:Router,
    private requestService:RequestsService,
    private activeRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.requestService.getRequest(this.id).subscribe((res : any) => {
      this.bidderItem = res.bidderItem;
      this.ownerItem = res.ownerItem;
    });
  }

}
