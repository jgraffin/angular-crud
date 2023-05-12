import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name = 'Julio';
  hobbies: string[] = ['Playing video games', 'Watching TV', 'Running'];
}
