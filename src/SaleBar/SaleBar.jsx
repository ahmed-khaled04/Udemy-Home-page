import { useState } from "react";
import styles from "./SaleBar.module.css";

function SaleBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.saleBar}>
      <p className={styles.text}>
        <strong>Black Friday Sale!</strong> Sitewide deals from £279.99. Ends Nov 28.
      </p>

      <button className={styles.closeBtn} onClick={() => setVisible(false)}>
        ✕
      </button>
    </div>
  );
}

export default SaleBar;
