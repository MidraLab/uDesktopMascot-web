import React from "react";
import styles from "./styles.module.css";

import posterImage from "../../img/uDM_MainCapsule.png";
import videoMp4 from "../../video/uDesktopMascot_steam_v6_nontxt.mp4";
import videoWebm from "../../video/uDesktopMascot_steam_v6_nontxt.webm";
import preview_character from "../../img/preview_title_img.png";

export default function Preview() {
  return (
    <section className="custom_container">
      <div className={styles.preview_content}>
        <div className={styles.preview_frame}>
          <video
            className={styles.preview_video}
            id="preview-video"
            poster={posterImage}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
          </video>
        </div>
      </div>
      <div className={styles.preview_character}>
        <img src={preview_character} alt="Character Preview" />
      </div>
    </section>
  );
}
