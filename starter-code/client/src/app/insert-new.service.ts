import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InsertNewService {
  body: any = {};
  constructor(private http: Http) { }
  
  insertNew(myformValues) {
    this.body = {
      'title': myformValues.newTitle,
      'content': myformValues.newContent
    };
    
    return this.http.post('http://localhost:3000/api/journal-entries', this.body )
      .map((res: Response) => {
        return res.json()
      })

  }

}
