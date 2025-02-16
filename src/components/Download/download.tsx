import React from "react";
import DownloadButton from "../Button/DownloadButton";
import styles from "./styles.module.css";

export default function Download() {
  return (
    <section className={styles.download_container}>
      <div className={styles.title}>無料でダウンロード</div>
      <div className={styles.buttonContainer}>
        <DownloadButton />
      </div>
    </section>
  );
}
