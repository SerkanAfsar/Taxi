import Link from "next/link";
import styles from "./Logo.module.scss";
import image from "../../../public/images/logo-main.webp";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="d-none d-lg-block">
      <div className={`${styles.logo}`}>
        <Link href="/" title="Taksi Durakları">
          <Image src={image} width={117} height={32} alt="Taksi Durakları" />
        </Link>
      </div>
    </div>
  );
}
