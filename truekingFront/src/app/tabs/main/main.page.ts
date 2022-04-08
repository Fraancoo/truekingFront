import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public userID = localStorage.getItem('userID');
  public items: Array<any> = [];

  constructor(private route:Router, private itemService:ItemsService ) {
  }

  ngOnInit() {
    this.itemService.getItems().subscribe((res : any) => {
      this.items = res;
    });
  }

  viewItem(id: any){
    this.route.navigate(['/view/'+id]);
  }

  requestTrade(id: any){
    this.route.navigate(['/request/'+id]);
  }

}
