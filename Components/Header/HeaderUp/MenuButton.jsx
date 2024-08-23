import styles from "./MenuButton.module.scss";
import { forwardRef, useImperativeHandle } from "react";
const MenuButton = forwardRef((props, ref) => {
  return (
    <div role="button" className="d-block ms-auto cursor-pointer d-lg-none">
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
