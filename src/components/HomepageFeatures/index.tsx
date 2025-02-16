import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import catchphrase from "../../img/catchphrase.png";
import background from "../../img/uDM_MainCapsule.jpg";
import background_sm from "../../img/background_sm.jpg";
import Download from "../Download/download";
import Preview from "../Preview/preview";
import HowTo from "../HowTo/howto";
import Summary from "../Summary/summary";

export default function HomepageFeatures() {
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
    <section className={styles.features}>
      <section className={styles.home_background}>
        <img src={background} className={styles.pc} alt="PC用背景" />
        <img src={background_sm} className={styles.sm} alt="スマホ用背景" />
      </section>

      {isMobile ? (
        // スマホ用の順番
        <>
          <img
            className={styles.catchphrase}
            src={catchphrase}
            alt="キャッチフレーズ"
          />
          <Download />
        </>
      ) : (
        // PC用の順番
        <>
          <Download />
          <img
            className={styles.catchphrase}
            src={catchphrase}
            alt="キャッチフレーズ"
          />
        </>
      )}

      <Preview />
      <HowTo />
      <Summary />
      <Download />
    </section>
  );
}
