import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalEntriesService {

  constructor(private http: Http) { }

  getDetails(id) {
    
    return this.http.get('http://localhost:3000/api/journal-entries/'+ id)
      .map((res : Response) => {
        return res.json()
      })
      
  }

  

}
