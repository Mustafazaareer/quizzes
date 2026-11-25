import { NavLink } from "react-router-dom";
import Step from "../step/Step";
import styles from "./Levels.module.css";
import { useContext } from "react";
import { QuizContext } from "../../App";

const steps = [
  { number: 1, step: "choose" },
  { number: 2, step: "details" },
  { number: 3, step: "questions" },
  { number: 4, step: "results" },
];

function Levels({ currentStep }) {
  const { dispatch } = useContext(QuizContext);
  return (
    <div className={styles.mainContainer}>
      <NavLink
        to={"/"}
        className={styles.allQuizzesButton}
        onClick={() => dispatch({ type: "resetQuestions" })}
      >
        <img src="leftArrow.svg" alt="" className={styles.leftArrow} />
        <span className={styles.buttonText}>All Quizzes</span>
      </NavLink>
      <div className={styles.steps}>
        {steps.map((step) => (
          <Step
            step={step.step}
            number={step.number}
            currentStep={currentStep}
            key={step.number}
          />
        ))}
      </div>
    </div>
  );
}

export default Levels;
