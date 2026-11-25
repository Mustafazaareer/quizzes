import styles from "./Step.module.css";

function Step({ step, number, currentStep }) {
  return (
    <div className={styles.mainContainer}>
      <span
        className={`${styles.number} ${
          currentStep >= number ? styles.visited : ""
        }
         ${currentStep === number ? styles.atThisPage : ""}`}
      >
        {number}
      </span>
      <span
        className={`${styles.step}  ${
          currentStep === number ? styles.atThisPage : ""
        }`}
      >
        {step}
      </span>
    </div>
  );
}

export default Step;
