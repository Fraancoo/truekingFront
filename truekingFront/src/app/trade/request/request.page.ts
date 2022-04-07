import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  
  public id = <string>this.activeRoute.snapshot.params.id;
  public userID = localStorage.getItem('userID');
  public item = [];
  public ownerID = null;
  public userItems = [];
  public selectedItem = null;

  constructor(
    private activeRoute:ActivatedRoute,
    private itemService:ItemsService,
    private requestService:RequestsService
  ) {}

  ngOnInit() {
    this.itemService.getItem(this.id).subscribe((res : any) => {
      this.item = res;
      this.ownerID = res.userID;
    });
    this.itemService.getItemFromUser(this.userID).subscribe((res : any) => {
      this.userItems = res;
    });
  }

  selectItem(id:any) {
    var item = document.getElementById(id);
    if (item.classList.contains('selected')) {
      item.classList.remove("selected");
      this.selectedItem = null;
    } else {
      item.classList.add("selected");
      this.selectedItem = id;
    }
  }

  sendOffer() {
    this.requestService.addRequest(this.selectedItem, this.id, this.userID, this.ownerID);
  }

}
