import styles from "./MenuButton.module.scss";
export default function MenuButton() {
  return (
    <div className="d-block ms-auto d-lg-none">
      <div className={styles.menuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
