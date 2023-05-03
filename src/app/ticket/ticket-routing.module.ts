import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketsComponent } from './create-tickets/create-tickets.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { TicketComponent } from './ticket.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketsListComponent
  },
  {
    path: 'tickets/:id',
    component: EditTicketComponent
  },
  {
    path: 'create-tickets',
    component: CreateTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketListRoutingModule { }
