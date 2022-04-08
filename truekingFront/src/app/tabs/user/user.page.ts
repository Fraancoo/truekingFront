import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public user: Array<any> = [];
  public userID = localStorage.getItem('userID');
  
  constructor(private route:Router, private userService:UserService) {}
  
  ngOnInit() {
    this.userService.getUser(this.userID).subscribe((res : any) => {
      this.user = res;
    });
  }

  viewItem(id: any){
    this.route.navigate(['/view/'+id]);
  }

}
