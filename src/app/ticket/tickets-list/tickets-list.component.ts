import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Tickets } from '../tickets';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ticketName', 'displayId', 'dateOfCreation', 'description', 'status'];
  dataSource!: MatTableDataSource<Tickets>;
  statusOptions = ['Open', 'In-progress', 'Complete', 'Deferred'];
  public statusDrop: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private router: Router,) {

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

  public create() {
    this.router.navigate(['m/create-tickets']);
  }

  onItemSelect(e: any) {
    console.log(e);
  }
}
