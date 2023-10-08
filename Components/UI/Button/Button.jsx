import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({ text, type = "primary" }) {
  return (
    <Link
      className={
        type == "primary"
          ? `${styles.button} ${styles.button__primary}`
          : `${styles.button} ${styles.button__secondary}`
      }
      href={"/"}
    >
      {text}
    </Link>
  );
}
