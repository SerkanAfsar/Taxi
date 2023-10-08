import ContentArea from "../Content/ContentArea";
import ServiceInfo from "./ServiceInfo";
import styles from "./ServicesSection.module.scss";
import { BsFillTaxiFrontFill } from "react-icons/bs";

export default function ServicesSection() {
  const infoText = {
    title: "Türkiye Taksi Durakları Listesi",
  };
  const infos = [
    {
      title: "İl Seçiniz",
      description: "Aramak İstediğiniz İli Seçiniz",
      icon: <BsFillTaxiFrontFill />,
    },
    {
      title: "İlçe Seçiniz",
      description: "Aramak İstediğiniz İlçeyi Seçiniz",
      icon: <BsFillTaxiFrontFill />,
    },
    {
      title: "Liste Karşınızda",
      description: "Taksi Listesi Eksiksiz Şekilde Karşınızda",
      icon: <BsFillTaxiFrontFill />,
    },
    {
      title: "Detaylı Bilgi",
      description: "Detaylı Taksi Durakları Bilgileri",
      icon: <BsFillTaxiFrontFill />,
    },
  ];
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ContentArea infoText={infoText} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={styles.servicesSection__servicesInfoArea}>
              {infos?.map((item, index) => (
                <ServiceInfo item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
