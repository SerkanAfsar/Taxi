import Link from "next/link";
import styles from "./Logo.module.scss";
import image from "../../../public/images/taksi.webp";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="d-none d-md-block">
      <div className={`${styles.logo}`}>
        <Link href="/" title="Taksi Durakları">
          <Image src={image} width={117} height={60} alt="Taksi Durakları" />
        </Link>
      </div>
    </div>
  );
}
