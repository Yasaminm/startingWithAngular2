import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="onClick()"></div>
  `,
  styles: [`
  div {
          height: 100px;
          width: 100px;
          background: gold;
      }
  `]
})
export class EventBindingComponent {
    @Output() clicked = new EventEmitter<string>();
    onClick(){
        this.clicked.emit('Neuer Text');
    }
}
