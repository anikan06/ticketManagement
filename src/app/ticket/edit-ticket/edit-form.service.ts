import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditFormService {
  id: any;
  private _destroyed$ = new Subject<any>();


  constructor(private route: ActivatedRoute) { 
    
  }

  getLocalStorageData(id: any) {
    let temDt = localStorage.getItem("Tickets");
    if(temDt != null) {
      let data = JSON.parse(temDt);
      console.log(data);
      let searchdata = data.find((o: any) => {
        console.log(o);
        console.log(id);
        parseInt(o.displayId) == parseInt(id);
      });
      console.log(searchdata);
    }
    
  }
}
