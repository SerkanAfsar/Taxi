"use client";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./HeaderUp.module.scss";
import InfoItem from "./InfoItem";
import MenuButton from "./MenuButton";
import LogoMobile from "../Logo/LogoMobile";
import { useEffect, useRef, useState } from "react";

export default function HeaderUp() {
  const [isSticky, setIsSticky] = useState(false);
  const itemList = [
    { title: "İstanbul Duraklari", url: "/taksi-duraklari/istanbul" },
    { title: "Ankara Duraklari", url: "/taksi-duraklari/ankara" },
    { title: "İzmir Duraklari", url: "/taksi-duraklari/izmir" },
  ];
  const ref = useRef();
  useEffect(() => {
    if (ref && ref.current) {
      const handler = (e) => {
        if (window.scrollY > ref.current.clientHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener("scroll", handler);
      return () => {
        window.removeEventListener("scroll", handler);
      };
    }
  }, [ref]);
  return (
    <div
      className={
        isSticky ? `${styles.headerUp} ${styles.sticky}` : `${styles.headerUp}`
      }
      ref={ref}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.headerUp__left}>
              <Logo />
              <LogoMobile />
              <SearchBox />
              <MenuButton />
            </div>
          </div>
          <div className={`d-none d-lg-block col-lg-6 `}>
            <div className={styles.headerUp__right}>
              {itemList?.map((item, index) => (
                <InfoItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
