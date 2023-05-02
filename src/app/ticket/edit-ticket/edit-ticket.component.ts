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
  ticketArr: Array<Tickets> = [];
  id: any;

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

    this.efs.getLocalStorageData(this.id);
  }

  createForm() {
    const pipe = new DatePipe('en-US');
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
  onUpdate() {
    const isDt = localStorage.getItem('Tickets');
    if (isDt == null) {
      const newData = [];
      newData.push(this.editTickets.getRawValue());
      localStorage.setItem('Tickets', JSON.stringify(newData));
    } else {
      const oldData = JSON.parse(isDt);
      oldData.push(this.editTickets.getRawValue());
      localStorage.setItem('Tickets', JSON.stringify(oldData));
    }
    this.router.navigate(['m/tickets']);
  }
}
