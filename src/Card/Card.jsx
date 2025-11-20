import styles from "./Card.module.css";

function Card({ image, count, title }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.infoBox}>
        <div className={styles.topRow}>
          <span className={styles.icon}>👥</span>
          <span className={styles.count}>{count}</span>
        </div>

        <div className={styles.title}>{title}</div>

        <div className={styles.arrow}>→</div>
      </div>
    </div>
  );
}

export default Card;
