import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Tickets } from '../tickets';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ticketName', 'displayId', 'dateOfCreation', 'description', 'status'];
  dataSource!: MatTableDataSource<Tickets>;


  constructor() {

  }

  ngOnInit(): void {
    const localdata = localStorage.getItem('Tickets');
    if(localdata != null) {
      this.dataSource = JSON.parse(localdata);
    }
    
  }

  ngAfterViewInit() {
    
  }
}
