import React from "react";
import styles from "./styles.module.css";
import steam_logo from "../../img/steam_logo.png";
import booth_logo from "../../img/booth_logo.png";
export default function DownloadButtons() {
  return (
    <div className={styles.buttonContainer}>
      {/* Steam ダウンロードボタン */}
      <a
        href="https://store.steampowered.com/about/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadButton + " " + styles.steamButton}
      >
        <img src={steam_logo}></img>
      </a>

      {/* Booth ダウンロードボタン */}
      <a
        href="https://booth.pm/ja"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadButton + " " + styles.boothButton}
      >
        <img src={booth_logo}></img>
      </a>
    </div>
  );
}
