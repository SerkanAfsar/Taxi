import Link from "next/link";
import styles from "./BreadCrumb.module.scss";
export default function BreadCrumb({ arr }) {
  return (
    <nav className={styles.wrapper}>
      <ul>
        {arr?.map((item, index) => (
          <li key={index}>
            <Link href={item.url} title={item.name}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
