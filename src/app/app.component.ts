import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myParentNumber = 0;

  title = 'angular-course';

  onChangeNumberParent() {
    this.myParentNumber = Math.floor(Math.random() * 1000);
  }
}
