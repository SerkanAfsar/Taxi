import styles from "./FooterBottom.module.scss";
import Link from "next/link";
export default function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center justify-content-lg-end">
            <Link href={"/"} rel="nofollow">
              Copyright {new Date().getFullYear()} © Taksi Durakları | Powered
              By Serkan Afşar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
