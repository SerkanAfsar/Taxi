import styles from "./SearchBox.module.scss";
import { BiMap } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function SearchBox() {
  return (
    <form className={styles.searchBox}>
      <span>
        <BiMap />
      </span>
      <input
        className={styles.searchBox__input}
        type="text"
        placeholder="İl Yazınız"
      />
      <button type="submit" className={styles.searchBox__btn}>
        <AiOutlineArrowRight />
      </button>
    </form>
  );
}
