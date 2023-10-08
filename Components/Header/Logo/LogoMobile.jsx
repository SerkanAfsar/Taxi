import Image from "next/image";
import image from "../../../public/images/logo-icon.webp";
import styles from "./LogoMobile.module.scss";
export default function LogoMobile() {
  return (
    <div className={`d-block d-lg-none ${styles.logoMobile}`}>
      <Image src={image} width={50} height={60} alt="Taksi Durakları" />
    </div>
  );
}
