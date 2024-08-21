"use client";
import { useEffect, useState } from "react";
import styles from "./Arrow.module.scss";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Arrow() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (typeof window != "undefined" && window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      className={
        isActive ? `${styles.arrow} ${styles.active}` : `${styles.arrow}`
      }
    >
      <FaArrowCircleUp />
    </div>
  );
}
