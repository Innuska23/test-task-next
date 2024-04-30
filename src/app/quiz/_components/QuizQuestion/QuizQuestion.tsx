'use client'
import { Answer, Quiz, QuizUserAnswer } from '@/app/types/quiz';
import styles from './QuizQuestion.module.css'
import { FormEvent, useState } from 'react';

interface IQuizQuestion {
    activeQuiz: number,
    totalQuiz: number,
    quiz: Quiz,
    userAnswer?: QuizUserAnswer,
    onAnswer: (answer: Answer) => void,
    onNext: () => void,
}

export const QuizQuestion = ({ userAnswer, activeQuiz, totalQuiz, quiz, onAnswer, onNext }: IQuizQuestion) => {
    const handleNext = () => onNext();

    const handleAnswer = (answer: Answer) => () => {
        onAnswer(answer)
    }

    return (
        <div>
            <div className={styles.questionNumber}>{`Question ${activeQuiz} of ${totalQuiz}`}</div>
            <div className={styles.questionText}>{quiz.question}</div>

            {quiz.answers.map((answer, index) => (
                <div
                    key={index}
                    className={`${styles.answerOption} ${userAnswer?.answer?.text == answer.text ? userAnswer.answer?.isCorrect ? styles.correct : styles.in_correct : ''}`}
                >

                    <label >
                        <input
                            id={`answer-${index}`}
                            type="radio"
                            name="question"
                            className={styles.answerInput}
                            onClick={handleAnswer(answer)}
                            disabled={!!userAnswer} />
                        {answer.text}
                    </label>
                </div>
            ))
            }

            <button className={styles.next_btn} onClick={handleNext} disabled={!userAnswer}>Next</button>

        </div >
    );
};
