import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  face: number = 0;

  constructor() {
    setInterval(() => { this.getFaceNumber(); }, 2000);
  }

  getFaceNumber() {
    this.face = Math.random();
  }
}
