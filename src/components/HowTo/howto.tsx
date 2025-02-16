import React from "react";
import styles from "./styles.module.css";
import menue from "../../img/menue.png";
import howto_character from "../../img/howto_title.png";
import howto_chara_total_2 from "../../img/howto_chara_total_2.png";

export default function HowTo() {
  return (
    <section>
      <div className={styles.howToSection}>
        <div className="custom_container">
          <h2 className={styles.howToTitle}>
            オリジナルモデルを自由自在に配置・カスタマイズ。<br></br>
            あなたのデスクトップのマスコットにすることができます。
          </h2>
          <h2 className={styles.explain}>・簡単操作でモデルやボイスを変更</h2>
          <div className={styles.howto_img_contnt}>
            <img src={howto_chara_total_2} />
          </div>
          <div className={styles.munue_content}>
            <img src={menue} />
            <h2 className={styles.explain}>
              ・その他追加機能も続々アップデート！
            </h2>
          </div>

          <div className={`${styles.howto_character}`}>
            <img src={howto_character} />
          </div>
        </div>
      </div>
    </section>
  );
}
