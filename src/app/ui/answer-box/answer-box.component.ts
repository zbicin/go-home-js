import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ghj-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent implements OnChanges {

  @Input() answers: string[];
  @Output() answerGiven = new EventEmitter<number>();
  selectedAnswerIndex: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedAnswerIndex = null;
  }

  isSelectedAnswer(index: number) {
    return this.selectedAnswerIndex === index;
  }

  selectAnswer(index: number) {
    this.selectedAnswerIndex = index;
    this.answerGiven.emit(index);
  }

}
