import ContentArea from "../Content/ContentArea";
import styles from "./HeroSection.module.scss";
import taksiImage from "../../public/images/taksi.png";
import Image from "next/image";
export default function HeroSection() {
  const btnInfo = {
    text: "Bütün İller İçin Tıklayınız",
    type: "secondary",
  };
  const infoText = {
    title: "Türkiye Taksi Durakları Listesi",
    content: "Türkiyenin Bütün İllerinde İl-İlçe Taksi Durakları Listesi",
  };
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className={styles.heroSection__left}>
            <ContentArea
              hasBottom={false}
              infoText={infoText}
              btnInfo={btnInfo}
            />
          </div>
          <div className={styles.heroSection__right}>
            <Image src={taksiImage} width={500} height={400} alt="Taksi" />
          </div>
        </div>
      </div>
    </section>
  );
}
