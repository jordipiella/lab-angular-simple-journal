import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../journal-entries.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  providers: [JournalEntriesService],
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  itemId: string;
  result: Object = {};
  

  constructor(private route: ActivatedRoute, private item: JournalEntriesService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params)=>{
      this.itemId = params['id'];
      this.getDetails(this.itemId);
    });
    
  }
  getDetails(id) {
   
    this.item.getDetails(id)
      .subscribe((details) => {
        return this.result = details;
      });
  }
}