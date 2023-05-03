import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditFormService {
  id: any;
  private _destroyed$ = new Subject<any>();

  constructor(private route: ActivatedRoute) {}

  getLocalStorageData(id: any, data: any) {
    let tempId = parseInt(id);
    let searchdata;
    console.log(data);
    searchdata = data.filter((o: any) => o.displayId === tempId);

    return searchdata[0];
  }
}
