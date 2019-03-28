import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})

export class ImagesComponent {

  selectedFile: File = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  save() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('/Image/SaveImage', uploadData).subscribe();
  }
}
