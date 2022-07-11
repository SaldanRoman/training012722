import { Component } from '@angular/core';

export interface TestObj {
  propFirst: number;
  propSecond: number;
  propThird: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testObj: TestObj = {
    propFirst: 1,
    propSecond: 2,
    propThird: 3
  };

  testForIn(): void {
    for (const i in this.testObj) {
      console.log(i);
    }
  }
}
