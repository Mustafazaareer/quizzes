import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.leftText}>Quiz Hub</span>
      <span className={styles.rightText}>Stay curious.</span>
    </div>
  );
}

export default Footer;
