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
              Taksi Durakları sitesi sizlere Türkiye il ve ilçelerine göre arama
              listesi sunar. Telefon ve adres detaylarına bakarak taksi
              listelerine ulaşabilirsiniz. İyi günler dileriz.
            </p>
          </div>
          <div className="col-12 col-lg-9">
            <h4>Taksi Durakları</h4>
            <ul>
              <li>
                <Link
                  href={"/taksi-duraklari/istanbul"}
                  title="İstanbul Taksi Durakları"
                >
                  İstanbul Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/ankara"}
                  title="Ankara Taksi Durakları"
                >
                  Ankara Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/izmir"}
                  title="İzmir Taksi Durakları"
                >
                  İzmir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/bursa"}
                  title="Bursa Taksi Durakları"
                >
                  Bursa Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/eskisehir"}
                  title="Eskişehir Taksi Durakları"
                >
                  Eskişehir Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/adana"}
                  title="Adana Taksi Durakları"
                >
                  Adana Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/konya"}
                  title="Konya Taksi Durakları"
                >
                  Konya Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/kayseri"}
                  title="Kayseri Taksi Durakları"
                >
                  Kayseri Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/kocaeli"}
                  title="Bursa Taksi Durakları"
                >
                  Kocaeli Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/kastamonu"}
                  title="Kastamonu Taksi Durakları"
                >
                  Kastamonu Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/malatya"}
                  title="Malatya Taksi Durakları"
                >
                  Malatya Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/elazig"}
                  title="Elazığ Taksi Durakları"
                >
                  Elazığ Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/kilis"}
                  title="Kilis Taksi Durakları"
                >
                  Kilis Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/mersin"}
                  title="Mersin Taksi Durakları"
                >
                  Mersin Taksi Durakları
                </Link>
              </li>
              <li>
                <Link
                  href={"/taksi-duraklari/mugla"}
                  title="Muğşa Taksi Durakları"
                >
                  Muğla Taksi Durakları
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
