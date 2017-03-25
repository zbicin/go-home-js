import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ghj-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent {

  @Input() answers: string[];
  @Output() answerGiven = new EventEmitter<number>();
  selectedAnswerIndex: number;

  constructor() { }

  isSelectedAnswer(index: number) {
    return this.selectedAnswerIndex === index;
  }

  selectAnswer(index: number) {
    this.selectedAnswerIndex = index;
    this.answerGiven.emit(index);
  }

}
