import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Reservation } from '../Common/models';

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('Reservation/GetReservations', { responseType: 'json' });
  }

  getDetails(reservationID: any): Observable<Reservation> {
    return this.http.get<Reservation>(reservationID, { responseType: 'json' });
  }

  updateReservation(reservation: any): Observable<any> {
    return this.http.post<any>('/Reservation/Update', reservation, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
    });
  }
}
