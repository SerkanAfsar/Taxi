import styles from "./CityListSearch.module.scss";
import { BiMap } from "react-icons/bi";
export default function CityListSearch({ searchText, setSearchText }) {
  return (
    <div className={styles.content}>
      <div className={styles.content__searchText}>
        <span>
          <BiMap />
        </span>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value || null)}
          value={searchText}
          placeholder="Aramak İstediğiniz İli Yazınız..."
        />
      </div>
    </div>
  );
}
