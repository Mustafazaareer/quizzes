import { useContext, useEffect } from "react";
import styles from "./ProgressBar.module.css";
import { QuizContext } from "../../App";

function ProgressBar() {
  const { state } = useContext(QuizContext);
  const questions = state.quiz.questions;
  var answerdQuestions = questions.filter((qustion) => qustion.answer != null);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.status}>
        <span
          className={styles.questionOfQuestions}
        >{`Question ${state.questionIndex} of ${questions.length}`}</span>
        <span
          className={styles.answereds}
        >{`${answerdQuestions.length} Answered`}</span>
      </div>
      <progress
        className={styles.progressBar}
        max={questions.length}
        value={state.questionIndex}
      ></progress>
    </div>
  );
}

export default ProgressBar;
