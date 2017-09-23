import { Component, OnInit } from '@angular/core';
import { InsertNewService } from '../insert-new.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  providers: [InsertNewService],
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  newTitle:string;
  newContent:string;
  valuer: any;
  formValue: Object = {};
  constructor(private insert: InsertNewService) { }

  ngOnInit() {
  }

  insertNew(myformValue) {
    this.formValue = myformValue;
    this.insert.insertNew(this.formValue).
      subscribe((value) => { 
        return this.valuer = value;
      })
  }
  
  submitForm(myForm) {
    this.insertNew(myForm.value)
    myForm.value = {};
  }
  
}
