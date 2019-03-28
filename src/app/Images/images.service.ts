import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ImagesService {
  constructor(private http: HttpClient) { }

  saveImage(file: FormData) {
    return this.http.post('/Image/SaveImage', file);
  }

  loadImage(name: string) {
    return this.http.post('/Image/GetImage', { 'name': name });
  }
}
