import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Location } from '@angular/common';
import { Reservation } from '../../Common/models';

@Component({
  selector: 'reservation-delete',
  templateUrl: './reservation-delete.component.html',
  styleUrls: ['./reservation-delete.component.scss'],
})

export class ReservationDeleteComponent {
  reservation: Reservation;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    let reservationID = this.route.snapshot.paramMap.get('id');

    this.reservationService.getDetails(reservationID)
      .subscribe((result: Reservation) => {
        this.reservation = result;
      });
  }

  back() {
    this._location.back();
  }

  formatDate(date: any) {
    return parseInt(date.substr(6));
  }
}
