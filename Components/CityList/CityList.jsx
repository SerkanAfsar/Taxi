"use client";

import Link from "next/link";
import styles from "./CityList.module.scss";
import { useMemo } from "react";
export default function CityList({ data, searchText }) {
  const result = useMemo(() => {
    return searchText
      ? data.filter((a) =>
          a.sehirAd.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )
      : data;
  }, [searchText, data]);

  return (
    <div className={styles.cityList}>
      <div className={styles.cityList__grid}>
        {result?.map((item, index) => (
          <Link
            title={`${item.sehirAd} Taksi Durakları`}
            href={`/taksi-duraklari/${item.sehirSlug}`}
            className={styles.cityList__city}
            key={index}
          >
            {item.sehirAd} Taksi Durakları
          </Link>
        ))}
      </div>
    </div>
  );
}
