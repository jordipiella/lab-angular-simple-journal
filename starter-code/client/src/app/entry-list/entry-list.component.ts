import { Component, OnInit } from '@angular/core';
import { ListService } from '../list/list.service';
import { InsertNewService } from '../insert-new.service';

import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  providers: [ListService],

  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  item : any;
  
  
  constructor(private list : ListService) { }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.list.getList()
      .subscribe((item) => {
        return this.item = item;
      });
  }
  
  
 

}
