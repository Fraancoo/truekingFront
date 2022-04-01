import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  seeOffer(){
    this.route.navigate(['/offer']);
  }

}
