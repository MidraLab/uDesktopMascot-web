import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import menue from "../../img/menue.png";
import howto_character from "../../img/howto_title.png";
import howto_chara_total_2 from "../../img/howto_chara_total_2.png";

export default function HowTo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 初回実行
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className={styles.howToSection}>
        <div className="custom_container">
          {isMobile ? (
            // スマホ版（画像を先に表示）
            <>
              <div className={`${styles.howto_character}`}>
                <img src={howto_character} />
              </div>
              <h2 className={styles.howToTitle}>
                デスクトップ上にオリジナルモデルを<br></br>
                自由自在に配置・カスタマイズすることができます。<br></br>　
                <br></br>
                あなただけの“デスクトップマスコット”が完成！
              </h2>
              <h2 className={styles.explain}>
                ・簡単操作でモデルやボイスを変更
              </h2>
              <div className={styles.howto_img_contnt}>
                <img src={howto_chara_total_2} />
              </div>
              <div className={styles.munue_content}>
                <img src={menue} />
                <h2 className={styles.explain}>
                  ・その他追加機能も続々アップデート！
                </h2>
              </div>
            </>
          ) : (
            // PC版（テキストを先に表示）
            <>
              <h2 className={styles.howToTitle}>
                デスクトップ上にオリジナルモデルを<br></br>
                自由自在に配置・カスタマイズすることができます。<br></br>　
                <br></br>
                あなただけの“デスクトップマスコット”が完成！
              </h2>
              <h2 className={styles.explain}>
                ・簡単操作でモデルやボイスを変更
              </h2>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
