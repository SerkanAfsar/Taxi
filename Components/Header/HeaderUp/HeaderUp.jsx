"use client";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./HeaderUp.module.scss";
import InfoItem from "./InfoItem";
import MenuButton from "./MenuButton";
import LogoMobile from "../Logo/LogoMobile";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function HeaderUp() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const itemList = [
    { title: "İstanbul Duraklari", url: "/taksi-duraklari/istanbul" },
    { title: "Ankara Duraklari", url: "/taksi-duraklari/ankara" },
    { title: "İzmir Duraklari", url: "/taksi-duraklari/izmir" },
  ];
  const ref = useRef();
  const menuBtnRef = useRef();
  const mobileMenuRef = useRef();

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

  useEffect(() => {
    if (menuBtnRef && menuBtnRef.current) {
      const item = mobileMenuRef.current;
      menuBtnRef.current.addEventListener("click", item.handleChangeActive);
      return () => {
        if (menuBtnRef.current) {
          menuBtnRef.current.removeEventListener(
            "click",
            item.handleChangeActive
          );
        }
      };
    }
  }, [menuBtnRef]);

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
              <MenuButton ref={menuBtnRef} />
              <MobileMenu ref={mobileMenuRef} itemList={itemList} />
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
