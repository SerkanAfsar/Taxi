import styles from "./MenuButton.module.scss";
import { forwardRef, useImperativeHandle } from "react";
const MenuButton = forwardRef((props, ref) => {
  return (
    <div className="d-block ms-auto d-lg-none">
      <div ref={ref} className={styles.menuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
});
MenuButton.displayName = "MenuButton";
export default MenuButton;
