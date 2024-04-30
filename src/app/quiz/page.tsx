'use client'

import { useEffect, useState } from "react";
import { Answer, Quiz, QuizUserAnswer } from "../types/quiz";
import { QuizQuestion } from "./_components/QuizQuestion/QuizQuestion";
import { QuizSummary } from "./_components/QuizSummary/QuizSummary";
import { QuizProgress } from "./_components/QuizProgress/QuizProgress";

import styles from './page.module.css'

const getData = async () => {
    const response = await fetch("https://test-task-next-chi.vercel.app/api/quiz", {
        cache: "no-cache",
    });

    const data = await response.json();

    return data;
};


export default function QuizPage() {
    const [quizzes, setQuizzes] = useState<Array<Quiz> | undefined>()
    const [activeQuiz, setActiveQuiz] = useState(0)
    const [userAnswers, setUserAnswers] = useState<QuizUserAnswer[]>([])

    useEffect(() => {
        getData().then((data) => setQuizzes(data?.data))
    }, [])

    const selectedQuiz = quizzes && quizzes[activeQuiz];
    const userAnswer = userAnswers[activeQuiz];

    const handleQuizOnAnswer = (answer: Answer) => {
        setUserAnswers((current) => {
            if (selectedQuiz) {
                return [...current, { quiz: selectedQuiz, answer: answer }]
            }

            return current
        })

    }

    const handleQuizOnNext = () => setActiveQuiz(current => current + 1)

    return (
        <div className={styles.container}>
            {selectedQuiz && <>
                <QuizQuestion
                    userAnswer={userAnswer}
                    activeQuiz={activeQuiz + 1}
                    quiz={selectedQuiz}
                    totalQuiz={quizzes.length}
                    onAnswer={handleQuizOnAnswer}
                    onNext={handleQuizOnNext}
                />
                <QuizProgress userAnswers={userAnswers} />
            </>
            }

            {!selectedQuiz && !!userAnswers.length && <QuizSummary userAnswers={userAnswers} />}
        </div>
    );
}