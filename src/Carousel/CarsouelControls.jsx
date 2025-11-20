import { useState } from "react";
import styles from "./CarouselControls.module.css";

function CarouselControls({ total = 3 }) {
  const [active, setActive] = useState(0);

  function stepBack() {
    setActive(prev => Math.max(0, prev - 1));
  }

  function stepForward() {
    setActive(prev => Math.min(total - 1, prev + 1));
  }

  return (
    <div className={`${styles.container} carousel`} >
      <button className={styles.arrowBtn} onClick={stepBack}>‹</button>

      <div className={styles.dots}>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${active === i ? styles.active : ""}`}
          ></span>
        ))}
      </div>

      <button className={styles.arrowBtn} onClick={stepForward}>›</button>
    </div>
  );
}

export default CarouselControls;
