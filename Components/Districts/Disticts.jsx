"use client";
import { slugUrl } from "@/Utils/Helpers";
import styles from "./Districts.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function Districts({ districtData, citySlug, cityName }) {
  const { slug } = useParams();

  return (
    <ul className={styles.distictList}>
      {districtData?.map((item, index) => (
        <li key={index}>
          <Link
            className={
              slugUrl(item) == slug[1]
                ? `${styles.distictList} ${styles.active}`
                : ""
            }
            href={`/taksi-duraklari/${citySlug}/${slugUrl(item)}` || "/"}
            title={`${cityName} ${item} Taksi Durakları`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
