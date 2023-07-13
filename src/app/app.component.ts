import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-app';

  constructor(private router: Router, private location: Location) { }

  public get defaultGallery(): string {
    if (this.location.path().endsWith('/characters')) {
      return 'characters'
    } else {
      return 'comics'
    }
  }

  switchGalleryView(event: MatButtonToggleChange) {
    const gallery = event.value as string;
    this.router.navigate([gallery]);
  }

}
