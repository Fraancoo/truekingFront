import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public userID = localStorage.getItem('userID');
  public user = [];

  constructor(private route:Router, private userService:UserService) {
    this.userService.getUser(this.userID).subscribe((res : any) => {
      this.user = res;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

  home(){
    this.route.navigate(['/']);
  }

}
