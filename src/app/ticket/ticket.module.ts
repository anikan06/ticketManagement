import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketListRoutingModule } from './ticket-routing.module';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { CreateTicketsComponent } from './create-tickets/create-tickets.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TicketComponent } from './ticket.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';



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
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class TicketModule { }
