import styles from "./styles.module.css";
import catchphrase from "../../img/catchphrase.png";
import background from "../../img/uDM_MainCapsule.jpg";
import background_sm from "../../img/background_sm.jpg";
import Download from "../Download/download";
import Preview from "../Preview/preview";
import HowTo from "../HowTo/howto";
import Summary from "../Summary/summary";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.home_background}>
        <img src={background} className={styles.pc} alt="PC用背景" />
        <img src={background_sm} className={styles.sm} alt="スマホ用背景" />
      </div>

      <Download />
      <img
        className={styles.catchphrase}
        src={catchphrase}
        alt="キャッチフレーズ"
      />
      <Preview />
      <HowTo />
      <Summary />
      <Download />
    </section>
  );
}
