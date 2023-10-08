import Link from "next/link";
import styles from "./InfoItem.module.scss";
import { AiFillCar } from "react-icons/ai";
export default function InfoItem({ title }) {
  return (
    <Link href={"/"} className={styles.infoItem}>
      <div className={styles.infoItem__box}>
        <AiFillCar />
      </div>
      <span>{title}</span>
    </Link>
  );
}
