import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  leftpanel: number = -1;
  rightpanel: number = 0;

  SetLeftpanel(index: number) {
    this.leftpanel = index;
  }

  SetRightpanel(index: number) {
    this.rightpanel = index;
  }
}
