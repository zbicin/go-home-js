export class Question {
  constructor(
    public content: string,
    public answers: string[],
    public correctAnswerIndex: number
   ) { }

  public isCorrectAnswer(answerIndex: number) {
    return this.correctAnswerIndex === answerIndex;
  }

  toString() {
    return this.content;
  }
}
