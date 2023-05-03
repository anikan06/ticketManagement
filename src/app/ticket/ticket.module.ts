import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketListRoutingModule } from './ticket-routing.module';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { CreateTicketsComponent } from './create-tickets/create-tickets.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TicketComponent } from './ticket.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    EditTicketComponent,
    CreateTicketsComponent,
    TicketComponent,
    TicketsListComponent
  ],
  imports: [
    CommonModule,
    TicketListRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule,
    BsDatepickerModule.forRoot(),
    
  ]
})
export class TicketModule { }
