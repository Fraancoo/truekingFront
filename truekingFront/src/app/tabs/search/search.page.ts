import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public userID = localStorage.getItem('userID');
  public allItems = null;
  public items = null;
  public prueba = null
  public tags = [];
  public selectedTags = [];
  name: string = '';

  constructor(private route:Router, private itemService:ItemsService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((res : any) => {
      this.allItems = res;
      this.items = this.allItems;
    });
    this.itemService.getTags().subscribe((res : any) => {
      this.tags = res;
    });
  }

  viewItem(){
    this.route.navigate(['/view']);
  }

  removeTag(id) {
    for( let i = 0; i < this.selectedTags.length; i++){ 
      if (this.selectedTags[i].id === id) {
        this.tags.push(this.selectedTags[i]);
        this.selectedTags.splice(i, 1);
      }
    }
  }

  selectTag(id) {
    for( let i = 0; i < this.tags.length; i++){ 
      if (this.tags[i].id === id) {
        this.selectedTags.push(this.tags[i]);
        this.tags.splice(i, 1);        
      }
    }
  }

  search(name) {
    if (name == '') {
      this.items = this.allItems
    } else {
      this.itemService.searchItem(name).subscribe((res : any) => {
        this.items = res;
      });
    }
  }

}
