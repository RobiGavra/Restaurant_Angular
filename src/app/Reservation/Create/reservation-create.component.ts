import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Reservation } from '../../Common/models';


@Component({
  selector: 'reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss'],
})

export class ReservationCreateComponent {
  reservation: Reservation;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    //let reservationID = this.route.snapshot.paramMap.get('id');

    //this.reservationService.getReservation()
    //  .subscribe((result: any) => {
    //    this.reservation = result;
    //  });
  }

  back() {
    this._location.back();
  }

  formatDate(date: any) {
    return parseInt(date.substr(6));
  }

  save(): void {
    this.reservationService.updateReservation(this.reservation);
  }
}
