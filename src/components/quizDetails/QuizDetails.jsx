import { NavLink } from "react-router-dom";
import styles from "./QuizDetails.module.css";
import { useContext } from "react";
import { QuizContext } from "../../App";
import { getRandomColor } from "../../../utils/createColor";

function QuizDetails({ quiz, index }) {
  const color = {
    backgroundColor: getRandomColor(),
  };
  quiz.color = color;
  console.log(quiz, quiz.color);
  const { dispatch } = useContext(QuizContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.quizImg} style={color}>
        <img className={styles.quizIcon} src="atom.png" alt="" />
      </div>
      <div className={styles.quizDetails}>
        <span className={styles.topic}>{quiz.topic}</span>
        <h2 className={styles.quizName}>{quiz.name}</h2>
        <span className={styles.aboutQuiz}>{quiz.about}</span>
        <div className={styles.status}>
          <span className={styles.questionsNo}>
            <img className={styles.listIcon} src="listIcon.png" />
            <span>{quiz.questions.length} questions</span>
          </span>
          <span className={styles.duration}>
            <img className={styles.clockIcon} src="clock.png" />
            <span>~{quiz.duration}min</span>
          </span>
        </div>
        <NavLink
          to={"/start"}
          className={styles.startButton}
          onClick={() => dispatch({ type: "chooseQuiz", payload: index })}
        >
          <span className={styles.viewQuiz}>View quiz</span>
          <img src="arrow.png" className={styles.arrowIcon} />
        </NavLink>
      </div>
    </div>
  );
}

export default QuizDetails;
