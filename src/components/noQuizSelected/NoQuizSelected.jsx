import { NavLink } from "react-router-dom";
import styles from "./NoQuizSelected.module.css";

function NoQuizSelected() {
  return (
    <div className={styles.mainContainer}>
      <img src="click.svg" className={styles.icon} />
      <h1 className={styles.messege}>No Quiz Selected Yet!</h1>
      <p className={styles.paragraph}>
        click the button below to choose a quiz and start the journey :)
      </p>
      <NavLink to={"/"} className={styles.returnButton}>
        <span>choose a quiz</span>{" "}
        <img src="right-arrow.svg" alt="" className={styles.rightArrowIcon} />
      </NavLink>
    </div>
  );
}

export default NoQuizSelected;
