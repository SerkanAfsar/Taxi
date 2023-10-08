import HeaderUp from "./HeaderUp/HeaderUp";
import styles from "./Header.module.scss";
import HeaderDown from "./HeaderDown/HeaderDown";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderUp />
      <HeaderDown />
    </header>
  );
}
