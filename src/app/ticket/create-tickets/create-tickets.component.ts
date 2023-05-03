import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Tickets } from '../tickets';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-tickets',
  templateUrl: './create-tickets.component.html',
  styleUrls: ['./create-tickets.component.scss'],
})
export class CreateTicketsComponent implements OnInit {
  title: string = 'Create ticket';
  createTickets!: FormGroup;
  statusOptions = ['Open', 'In-progress', 'Complete', 'Deferred'];
  ticketArr: Array<Tickets> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const pipe = new DatePipe('en-US');
    this.createTickets = this.fb.group({
      ticketName: new FormControl('', Validators.required),
      displayId: new FormControl({
        value: Math.floor(100000 * Math.random()),
        disabled: true,
      }),
      description: new FormControl(''),
      dateOfCreation: new FormControl({
        value: pipe.transform(new Date(), 'MM/dd/yyyy'),
        disabled: true,
      }),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const isDt = localStorage.getItem('Tickets');
    if (isDt == null) {
      const newData = [];
      newData.push(this.createTickets.getRawValue());
      localStorage.setItem('Tickets', JSON.stringify(newData));
    } else {
      const oldData = JSON.parse(isDt);
      oldData.push(this.createTickets.getRawValue());
      localStorage.setItem('Tickets', JSON.stringify(oldData));
    }
    this.toastr.success(
      'Ticket' +
        ' ' +
        this.createTickets.getRawValue().ticketName +
        ' ( Id: ' +
        this.createTickets.getRawValue().displayId +
        ' ) ' +
        'created successfully'
    );
    this.router.navigate(['m/tickets']);
  }

  cancel() {
    this.router.navigate(['m/tickets']);
  }
}
