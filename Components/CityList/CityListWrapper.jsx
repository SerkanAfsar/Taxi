"use client";
import styles from "./CityListWrapper.module.scss";
import { useState } from "react";
import CityList from "./CityList";
import Search from "./Search";
export default function CityListWrapper({ data }) {
  const [searchText, setSearchText] = useState(null);
  return (
    <section className={styles.cityListSection}>
      <div className="container">
        <Search searchText={searchText} setSearchText={setSearchText} />
        <CityList searchText={searchText} data={data} />
      </div>
    </section>
  );
}
