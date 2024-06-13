import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftHalf}>
        <img
          src="https://i.pinimg.com/736x/fd/b4/ee/fdb4ee176d07383c45c0bd4855766ed5.jpg"
          alt="Decorative"
          className={styles.image}
        />
      </div>
      <div className={styles.rightHalf}>
        <h1 className={styles.textTitle}>Welcome to MyPocket!</h1>
        <p className={styles.textContent}>Keep Your $ in Pocket.</p>
      </div>
    </div>
  );
}
