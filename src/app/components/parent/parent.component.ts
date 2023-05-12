import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  userName = 'John Doh';
  userData = {
    email: 'juliograffin@gmail.com',
    role: 'Programmer'
  }
}
