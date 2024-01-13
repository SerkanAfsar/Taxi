"use client";
import { slugUrl } from "@/Utils/Helpers";
import styles from "./Districts.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Districts({ districtData, citySlug, cityName }) {
  const { slug } = useParams();

  useEffect(() => {
    const taxiList = document.querySelector("#taxiList");
    if (taxiList) {
      window.scrollTo({
        top: taxiList.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [slug]);

  return (
    <ul className={styles.distictList}>
      <li>
        <Link
          href={`/taksi-duraklari/${citySlug}`}
          title={`${cityName} Taksi Durakları`}
          className={
            slug.length == 1 ? `${styles.distictList} ${styles.active}` : ""
          }
        >
          Bütün İlçeler
        </Link>
      </li>
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
