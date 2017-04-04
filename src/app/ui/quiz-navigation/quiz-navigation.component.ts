import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ghj-quiz-navigation',
  templateUrl: './quiz-navigation.component.html',
  styleUrls: ['./quiz-navigation.component.css']
})
export class QuizNavigationComponent {

  @Input() isNextQuestionDisabled = false;
  @Input() isSendAnswerDisabled = false;
  @Input() isSubmitDisabled = false;

  constructor() { }

}
