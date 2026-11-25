import { useContext } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { QuizContext } from "../../App";

function Nav() {
  const { dispatch } = useContext(QuizContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <span className={styles.bookIcon}>
          <img src="bookIcon.png" alt="" />
        </span>
        <h3 className={styles.title}>Quiz Hub</h3>
        <span className={styles.quote}>
          A little curiosity goes a long way.
        </span>
      </div>
      <NavLink
        to="/"
        className={styles.rightSection}
        onClick={() => dispatch({ type: "resetQuestions" })}
      >
        <img src="menu.png" className={styles.menuIcon} />
        <span className={styles.allQuizzes}>All Quizzes</span>
      </NavLink>
    </div>
  );
}

export default Nav;
