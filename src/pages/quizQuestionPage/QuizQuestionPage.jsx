import styles from "./QuizQuestionPage.module.css";
import Levels from "../../components/levels/Levels";
import ProgressBar from "../../components/progress/ProgressBar";
import Option from "../../components/option/Option";
import { useContext } from "react";
import { QuizContext } from "../../App";
import { NavLink } from "react-router-dom";
import NoQuizSelected from "../../components/noQuizSelected/NoQuizSelected";

function QuizQuestionPage() {
  const { state, dispatch } = useContext(QuizContext);
  let questionIndex = 0;
  let question = {};
  let isFirstQustion = true;
  let isLastQuestion = true;
  let answerIndex = null;
  let quizAnswerIndex = null;

  if (state.quiz) {
    questionIndex = state.questionIndex ? state.questionIndex : 0;
    question = state.quiz.questions[questionIndex]
      ? state.quiz.questions[questionIndex]
      : {};
    isFirstQustion = Number(questionIndex) === 0;
    isLastQuestion = questionIndex === Number(state.quiz.questions.length) - 1;
    quizAnswerIndex = state.quiz.questions[questionIndex].answer;
    answerIndex = state.answerIndex >= 0 ? state.answerIndex : quizAnswerIndex;
  }
  return (
    <div className={styles.mainContainer}>
      <Levels currentStep={3} />
      {state.quiz ? (
        <div className={styles.quistionSection}>
          <p className={styles.category}>{state.quiz.topic}</p>
          <ProgressBar
            answeredQuestions={4}
            currentQuestion={5}
            questionsNumber={10}
          />
          <h1 className={styles.quizName}>{question.question}</h1>
          <div className={styles.options}>
            {question.options.map((op, index) => (
              <Option
                option={op}
                optionIndex={index}
                key={index}
                answer={answerIndex}
              />
            ))}
          </div>
          <div className={styles.btns}>
            <button
              className={styles.previousButton}
              disabled={isFirstQustion}
              onClick={() => dispatch({ type: "previousQuestion" })}
            >
              {!isFirstQustion && (
                <img
                  className={styles.leftArrowIcon}
                  src="leftArrow.svg"
                  alt=""
                />
              )}
              <span className={styles.leftButtonText}>Previous</span>
            </button>
            {isLastQuestion ? (
              <NavLink
                className={styles.nextButton}
                to={"/result"}
                onClick={
                  answerIndex || answerIndex === 0
                    ? () =>
                        dispatch({ type: "finishQuiz", payload: answerIndex })
                    : null
                }
              >
                Finish
              </NavLink>
            ) : (
              <button
                className={`${styles.nextButton} ${
                  answerIndex || answerIndex === 0
                    ? styles.nextButtonEnabled
                    : styles.nextButtonDisabled
                }`}
                onClick={
                  answerIndex || answerIndex === 0
                    ? () =>
                        dispatch({ type: "nextQuestion", payload: answerIndex })
                    : null
                }
                disabled={answerIndex || answerIndex === 0 ? false : true}
              >
                <span className={styles.nextButtonText}>Next Question</span>
                {answerIndex || answerIndex === 0 ? (
                  <img
                    className={styles.rightArrowIcon}
                    src="arrow-right.svg"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
            )}
          </div>
        </div>
      ) : (
        <NoQuizSelected />
      )}
    </div>
  );
}

export default QuizQuestionPage;
