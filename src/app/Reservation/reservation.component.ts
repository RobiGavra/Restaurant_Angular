import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../Common/models';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})

export class ReservationComponent {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservations()
      .subscribe((result: Reservation[]) => {
        this.reservations = result;
      });
  }

  formatDate(date: any) {
    return parseInt(date.substr(6));
  }
}
