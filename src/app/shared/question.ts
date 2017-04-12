export class Question {
  static fromJson(rawJson: Question) {
    return new Question(
      rawJson.content,
      rawJson.answers,
      rawJson.correctAnswerIndex
    );
  }

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
