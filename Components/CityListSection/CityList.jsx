"use client";
import { useCallback } from "react";
import Link from "next/link";
import styles from "./CityList.module.scss";
import { useMemo } from "react";
export default function CityList({ data, searchText }) {
  const result = useMemo(() => {
    return searchText
      ? data.filter((a) =>
          a.SehirAd.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )
      : data;
  }, [searchText, data]);

  return (
    <div className={styles.cityList}>
      <div className={styles.cityList__grid}>
        {result?.map((item, index) => (
          <Link
            href={`/taksi-duraklari/${item.SehirSlug}`}
            className={styles.cityList__city}
            key={index}
          >
            {item.SehirAd} Taksi Durakları
          </Link>
        ))}
      </div>
    </div>
  );
}
