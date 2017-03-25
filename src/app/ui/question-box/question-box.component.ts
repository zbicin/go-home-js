import { Component, Input } from '@angular/core';

@Component({
  selector: 'ghj-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent {

  @Input() question: string;
  constructor() { }


}
