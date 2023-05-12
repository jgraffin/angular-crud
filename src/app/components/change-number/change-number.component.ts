import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<EventListener> = new EventEmitter();
  @Output() changeNumberParent: EventEmitter<EventListener> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }

  handleClickParent() {
    this.changeNumberParent.emit();
  }
}
