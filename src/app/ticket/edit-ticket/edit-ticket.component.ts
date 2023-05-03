import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tickets } from '../tickets';
import { EditFormService } from './edit-form.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss'],
})
export class EditTicketComponent {
  title: string = 'Edit ticket';
  editTickets!: FormGroup;
  statusOptions = ['Open', 'In-progress', 'Complete', 'Deferred'];
  ticketArr: any;
  id: any;
  allTickets: Array<Tickets> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private efs: EditFormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    let tempTick = localStorage.getItem('Tickets');
    if (tempTick !== null) {
      this.allTickets = JSON.parse(tempTick);
      this.ticketArr = this.efs.getLocalStorageData(this.id, this.allTickets);
      this.onSet(this.ticketArr);
    }
  }

  createForm() {
    this.editTickets = this.fb.group({
      ticketName: new FormControl('', Validators.required),
      displayId: new FormControl({
        value: '',
        disabled: true,
      }),
      description: new FormControl(''),
      dateOfCreation: new FormControl({
        value: '',
        disabled: true,
      }),
      status: new FormControl('', Validators.required),
    });
  }

  onSet(ticket: Tickets) {
    this.editTickets.setValue(ticket);
  }

  onUpdate() {
    this.allTickets.splice(this.allTickets.findIndex((a: any) => a.displayId == this.id), 1); 
    this.allTickets.push(this.editTickets.getRawValue());
    localStorage.setItem('Tickets', JSON.stringify(this.allTickets));

    this.router.navigate(['m/tickets']);
  }
}
