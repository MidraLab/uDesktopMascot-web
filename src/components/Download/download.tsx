import React from "react";
import DownloadButton from "../Button/DownloadButton";
import styles from "./styles.module.css";

export default function Download() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>無料でダウンロード</h2>
      <div className={styles.buttonContainer}>
        <DownloadButton label="ダウンロード1" />
        <DownloadButton label="ダウンロード2" />
        <DownloadButton label="ダウンロード3" />
      </div>
    </section>
  );
}
