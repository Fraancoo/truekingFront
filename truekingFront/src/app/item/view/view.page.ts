import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public id = <string>this.activeRoute.snapshot.params.id;
  public userID = localStorage.getItem('userID');
  public item = [];
  public owner = [];

  constructor(
    private route:Router,
    private itemService:ItemsService,
    private activeRoute:ActivatedRoute,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.itemService.getItem(this.id).subscribe((res : any) => {
      this.item = res;
      this.userService.getUser(res.user[0].id).subscribe((res : any) => {
        this.owner = res;
      });
    });
  }

  home(){
    this.route.navigate(['/']);
  }

  requestTrade(id: any){
    this.route.navigate(['/request/'+id]);
  }

}
