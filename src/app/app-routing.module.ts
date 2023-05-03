import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'm/tickets',
    pathMatch: 'full'
  },
  {
    path: 'm',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
