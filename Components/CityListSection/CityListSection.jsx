"use client";
import styles from "./CityListSection.module.scss";
import { useState } from "react";
import CityList from "./CityList";
import CityListSearch from "./CityListSearch";
export default function CityListSection({ data }) {
  const [searchText, setSearchText] = useState(null);
  return (
    <section className={styles.cityListSection}>
      <div className="container">
        <CityListSearch searchText={searchText} setSearchText={setSearchText} />
        <CityList searchText={searchText} data={data} />
      </div>
    </section>
  );
}
