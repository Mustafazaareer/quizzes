import styles from "./StartQuizPage.module.css";
import Levels from "../../components/levels/Levels";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import NoQuizSelected from "../../components/noQuizSelected/NoQuizSelected";

function StartQuizPage() {
  const { state, dispatch } = useContext(QuizContext);

  let duration = 3;
  let questionsNum = 0;
  if (state.quiz) {
    duration = state.quiz.duration ? state.quiz.duration : duration;
    questionsNum = state.questionIndex + 1 ? state.quiz.questions.length : 0;
  }
  return (
    <div className={styles.mainContainer}>
      <Levels currentStep={2} />
      {state.quiz ? (
        <div className={styles.quizDetails}>
          <div className={styles.quizIconContainer}>
            <img src="atom.png" className={styles.icon} />
          </div>
          <p className={styles.category}>{state.quiz.topic}</p>
          <h1 className={styles.quizName}>{state.quiz.name}</h1>
          <p className={styles.about}>{state.quiz.about}</p>
          <div className={styles.details}>
            <div className={styles.section}>
              <img src="list.svg" alt="" className={styles.detailIcon} />
              <span className={styles.paragraph}>Quiz length</span>
              <span className={styles.detail}> {questionsNum} questions</span>
            </div>
            <div className={styles.section}>
              <img src="clock.svg" alt="" className={styles.detailIcon} />
              <span className={styles.paragraph}>Estimated time</span>
              <span className={styles.detail}>~{duration} minutes</span>
            </div>
            <div className={styles.section}>
              <img src="top-arrow.svg" alt="" className={styles.detailIcon} />
              <span className={styles.paragraph}>Answer format</span>
              <span className={styles.detail}>Multiple choice</span>
            </div>
          </div>
          <NavLink
            className={styles.startButton}
            to={"/play"}
            onClick={() => dispatch({ type: "started" })}
          >
            <span>Start quiz</span>
            <img className={styles.rightArrow} src="right-arrow.svg" alt="" />
          </NavLink>
        </div>
      ) : (
        <NoQuizSelected />
      )}
    </div>
  );
}

export default StartQuizPage;
