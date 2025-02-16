import React from "react";
import styles from "./styles.module.css";

import summary_img from "../../img/summary_img.png";

export default function Summary() {
  return (
    <section>
      <div className={styles.summary_frame}>
        <img className={styles.summary_img} src={summary_img} />
        <h2 className={styles.title}>
          なんでも作れるデジタルの世界だからこそ、<br></br>
          もっと自由に、自分らしく。
        </h2>
      </div>
    </section>
  );
}
