import { QuizUserAnswer } from "@/app/types/quiz"

interface IQuizSummary {
    userAnswers: QuizUserAnswer[]
}

export const QuizSummary = ({ userAnswers }: IQuizSummary) => {
    const totalAnswers = userAnswers.length;
    const correctAnswers = userAnswers.reduce((acc, curr) => {
        if (curr.answer?.isCorrect) {
            acc += 1;
        }

        return acc
    }, 0)

    return <>`{`Correct ${correctAnswers} of ${totalAnswers} questions`}</>
}