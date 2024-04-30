export interface Answer {
    text: string,
    isCorrect?: boolean,
}

export interface Quiz {
    question: string,
    answers: Array<Answer>
}

export interface QuizUserAnswer {
    quiz: Quiz,
    answer: Answer;
}