import { Component } from '@angular/core';
import { animate, style, group, query, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  name = 'Angular';
}
