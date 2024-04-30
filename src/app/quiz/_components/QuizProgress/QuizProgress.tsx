import { QuizUserAnswer } from "@/app/types/quiz"

import styles from './QuizProgress.module.css'


interface IQuizSummary {
    userAnswers: QuizUserAnswer[]
}

export const QuizProgress = ({ userAnswers }: IQuizSummary) => {

    return <div className={styles.container}>
        {userAnswers.map((answer, i) => <div key={i} className={`${styles.item} ${answer.answer.isCorrect ? styles.item_correct : styles.item_incorrect}`}></div>)}
    </div>
}