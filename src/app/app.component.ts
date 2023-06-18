import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{title}}</h1>
    <app-movies></app-movies>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Movie_log';

  getTitle(): string {
    return this.title;
  }
}
