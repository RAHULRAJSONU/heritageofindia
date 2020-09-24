import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'sidebar-app';
}
