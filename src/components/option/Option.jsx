import { useContext } from "react";
import styles from "./Option.module.css";
import { QuizContext } from "../../App";

const indexes = [
  { number: 0, symbol: "A" },
  { number: 1, symbol: "B" },
  { number: 2, symbol: "C" },
  { number: 3, symbol: "D" },
];

function getSymbol(currentIndex) {
  return indexes.find((item) => item.number === currentIndex)?.symbol;
}

function Option({ option, optionIndex, answer }) {
  const { state, dispatch } = useContext(QuizContext);
  const answered = optionIndex === answer;
  const quizAnswerIndex = state.quiz.questions[state.questionIndex].answer
    ? true
    : false;

  return (
    <button
      className={`${styles.mainContainer} ${answered && styles.clickedOption}`}
      onClick={() => dispatch({ type: "chooseAnswer", payload: optionIndex })}
      disabled={quizAnswerIndex}
    >
      <div className={styles.optionContainer}>
        <span
          className={`${styles.symbol} ${
            answered && styles.symbolContainerClicked
          }`}
        >
          {getSymbol(optionIndex)}
        </span>
        <span className={styles.option}>{option}</span>
      </div>
      {answered && <img src="correct.svg" className={styles.correctIcon} />}
    </button>
  );
}

export default Option;
