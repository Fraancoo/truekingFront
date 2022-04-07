import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public items: Array<any> = [];

  constructor(private route:Router, private itemService:ItemsService ) {
    this.itemService.getItems().subscribe((res : any) => {
      this.items = res;
    });
  }

  ngOnInit() {
  }

  requestTrade(id: any){
    this.route.navigate(['/request/'+id]);
  }

}
