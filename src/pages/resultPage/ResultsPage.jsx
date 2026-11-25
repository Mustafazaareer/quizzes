import { useContext } from "react";
import Levels from "../../components/levels/Levels";
import Result from "../../components/result/Result";
import styles from "./ResultsPage.module.css";
import { QuizContext } from "../../App";
import NoQuizSelected from "../../components/noQuizSelected/NoQuizSelected";
function ResultsPage() {
  const { state } = useContext(QuizContext);

  let questions = [];
  let correctQustions = [];
  if (state.quiz) {
    questions = state.quiz.questions;
    correctQustions = questions.filter(
      (question) => question.answer === question.correctOption
    );
  }

  return (
    <div className={styles.mainContainer}>
      <Levels currentStep={4} />
      {state.quiz ? (
        <section className={styles.resultSection}>
          <div className={styles.cupSymbol}>
            <img className={styles.cupIcon} src="cup-icon.svg" />
          </div>
          <p className={styles.category}>{state.quiz.topic}</p>
          <h1 className={styles.completeText}>Quiz Complete!</h1>
          <p className={styles.paragraph}>
            Another little discovery. Here’s how you did.
          </p>
          <p>
            <span className={styles.number}>
              {(correctQustions.length / questions.length) * 100}
            </span>
            <span className={styles.persentage}>%</span>
          </p>
          <p
            className={styles.score}
          >{`Your score · ${correctQustions.length} of ${questions.length} correct`}</p>
          <div className={styles.results}>
            <Result type={true} answers={correctQustions.length} />
            <Result
              type={false}
              answers={questions.length - correctQustions.length}
            />
          </div>
        </section>
      ) : (
        <NoQuizSelected />
      )}
    </div>
  );
}

export default ResultsPage;
