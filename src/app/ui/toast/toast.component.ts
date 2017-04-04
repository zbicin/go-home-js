import { animate, Component, Input, OnChanges, SimpleChanges, transition, trigger, style } from '@angular/core';

@Component({
  selector: 'ghj-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-50%)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateY(-50%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class ToastComponent implements OnChanges {

  @Input() content = 'Lorem lipsum';
  @Input() type = ToastType.Info;
  show = true;

  constructor() { }

  close() {
    this.show = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.show = true;
  }

  get typeCSSClass() {
    const typeName = ToastType[this.type].toLowerCase();
    return `alert-${typeName}`;
  }
}

export enum ToastType {
  Success,
  Danger,
  Info,
  Warning
}
