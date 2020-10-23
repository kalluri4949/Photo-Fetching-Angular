import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string;
  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.fetchPhoto();
  }
  onClick(): void {
    this.fetchPhoto();
  }
  fetchPhoto(): void {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
}
