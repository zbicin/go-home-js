import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ghj-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent implements OnChanges {

  @Input() answers: string[];
  @Input() correctAnswerIndex: number;
  @Input() disabled = false;
  @Input() highlightAnswers = false;

  @Output() answerGiven = new EventEmitter<number>();
  selectedAnswerIndex: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['answers']) {
      this.selectedAnswerIndex = null;
    }
  }

  shouldBeHighlightedAsCorrect(index: number) {
    const isCorrect = this.correctAnswerIndex === index;
    return this.highlightAnswers && isCorrect;
  }

  shouldBeHighlightedAsSelected(index: number) {
    const isSelected = this.selectedAnswerIndex === index;
    return !this.highlightAnswers && isSelected;
  }

  shouldBeHighlightedAsWrong(index: number) {
    const isSelected = index === this.selectedAnswerIndex;
    const isWrong = index !== this.correctAnswerIndex;
    return this.highlightAnswers && isSelected && isWrong;
  }

  selectAnswer(index: number) {
    this.selectedAnswerIndex = index;
    this.answerGiven.emit(index);
  }

}
