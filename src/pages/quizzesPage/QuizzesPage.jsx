import { useContext } from "react";
import QuizDetails from "../../components/quizDetails/QuizDetails";
import styles from "./QuizzesPage.module.css";
import { QuizContext } from "../../App";

function QuizzesPage() {
  const { state } = useContext(QuizContext);
  const quizzes = state.quizzes;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.pickChallengeText}>PICK YOUR NEXT CHALLENGE</p>
        <h1>All quizzes</h1>
        <div className={styles.intro}>
          <span className={styles.newTopicText}>
            A new topic. Five questions. What will you discover?
          </span>
          <span>{`${quizzes.length} `}quizzes</span>
        </div>
        <div className={styles.quizzes}>
          {quizzes.map((quiz, index) => (
            <QuizDetails quiz={quiz} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizzesPage;
