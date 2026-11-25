import styles from "./Result.module.css";

function Result({ type, answers }) {
  return (
    <div
      className={`${styles.mainContainer} ${
        type ? styles.correct : styles.wrong
      }`}
    >
      <img className={styles.symbol} src={type ? "correct.svg" : "wrong.svg"} />
      <span className={styles.answers}>{answers}</span>
      <span className={styles.message}>{`${
        type ? "Correct" : "Wrong"
      } Asnwers`}</span>
    </div>
  );
}

export default Result;
