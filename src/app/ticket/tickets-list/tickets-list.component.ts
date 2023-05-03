import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() {

  }

  ngOnInit(): void {
    const localdata = localStorage.getItem('Tickets');
    if(localdata != null) {
      this.dataSource = JSON.parse(localdata);
    }
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
