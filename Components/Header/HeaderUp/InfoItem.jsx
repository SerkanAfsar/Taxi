import Link from "next/link";
import styles from "./InfoItem.module.scss";
import { AiFillCar } from "react-icons/ai";
export default function InfoItem({ item }) {
  return (
    <Link href={item?.url} className={styles.infoItem}>
      <div className={styles.infoItem__box}>
        <AiFillCar />
      </div>
      <span>{item?.title}</span>
    </Link>
  );
}
