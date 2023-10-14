import styles from "./FooterNav.module.scss";
import Link from "next/link";
export default function FooterNav() {
  return (
    <div className={styles.footerNav}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <h4>Hakkımızda</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quidem eum minima eveniet ipsa corrupti, amet suscipit
              voluptatibus quod totam!
            </p>
          </div>
          <div className="col-12 col-lg-9">
            <h4>Taksi Durakları</h4>
            <ul>
              <li>
                <Link href={"/"} title="İstanbul Taksi Durakları">
                  İstanbul Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Ankara Taksi Durakları">
                  Ankara Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="İzmir Taksi Durakları">
                  İzmir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Bursa Taksi Durakları">
                  Bursa Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Eskişehir Taksi Durakları">
                  Eskişehir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="İstanbul Taksi Durakları">
                  İstanbul Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Ankara Taksi Durakları">
                  Ankara Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="İzmir Taksi Durakları">
                  İzmir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Bursa Taksi Durakları">
                  Bursa Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Eskişehir Taksi Durakları">
                  Eskişehir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="İzmir Taksi Durakları">
                  İzmir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Bursa Taksi Durakları">
                  Bursa Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Eskişehir Taksi Durakları">
                  Eskişehir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="İzmir Taksi Durakları">
                  İzmir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link href={"/"} title="Bursa Taksi Durakları">
                  Bursa Taksi Durakları
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
