import GetCityListService from "@/Services/City.Service";
import styles from "./CityListSection.module.scss";
import Link from "next/link";
export default async function CityListSection() {
  const result = await GetCityListService();
  if (result?.status != "success") {
    throw new Error(result.message);
  }
  return (
    <section className={styles.cityListSection}>
      <div className="container">
        <div className={styles.cityListSection__grid}>
          {result.data.map((item, index) => (
            <Link
              href={`/taksi-duraklari/${item.SehirSlug}`}
              className={styles.cityListSection__city}
              key={index}
            >
              {item.SehirAd} Taksi Durakları
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
