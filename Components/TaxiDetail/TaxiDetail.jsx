import styles from "./TaxiDetail.module.scss";
export default function TaxiDetail({ item }) {
  return (
    <div className={styles.taxiDetail}>
      <h4>{item.durakAd}</h4>
      <b>{item.ilce}</b>
    </div>
  );
}
