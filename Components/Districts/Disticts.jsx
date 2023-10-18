import styles from "./Districts.module.scss";
import Link from "next/link";
export default function Districts({ districtData, citySlug, cityName }) {
  return (
    <ul className={styles.distictList}>
      {districtData?.map((item, index) => (
        <li key={index}>
          <Link
            href={`/taksi-duraklari/${citySlug}/deneme1` || "/"}
            title={`${cityName} ${item} Taksi Durakları`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
