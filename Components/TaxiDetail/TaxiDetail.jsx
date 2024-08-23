import styles from "./TaxiDetail.module.scss";
import { AiFillCar } from "react-icons/ai";
export default function TaxiDetail({ item, handleMapClick }) {
  return (
    <div className={styles.taxiDetail}>
      <AiFillCar />
      <div className={styles.taxiDetail__detail}>
        <h4>{item.durakAd}</h4>
        <b>{item.ilce}</b>
        <span>{item.durakAdres}</span>
        {item.durakTel && <a href={`tel:${item?.durakTel}`}>{item.durakTel}</a>}
        {item.latitude && item.longitude && (
          <button type="button" onClick={(e) => handleMapClick(item)}>
            Haritada Görüntüle
          </button>
        )}
      </div>
    </div>
  );
}
