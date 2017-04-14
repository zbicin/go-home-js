import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ghj-quiz-navigation',
  templateUrl: './quiz-navigation.component.html',
  styleUrls: ['./quiz-navigation.component.css']
})
export class QuizNavigationComponent {

  @Input() isNextQuestionDisabled = false;
  @Input() isSubmitAnswerDisabled = false;
  @Output() nextQuestion = new EventEmitter<void>();
  @Output() submitAnswer = new EventEmitter<void>();

  constructor() { }

  onNextQuestionClick() {
    this.nextQuestion.emit();
  }

  onSubmitClick() {
    this.submitAnswer.emit();
  }

}
