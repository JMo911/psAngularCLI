import { Component } from '@angular/core';

const num = 7;

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular cli course';

  sayHello() {
    const x = 10;
  }
}
