import styles from "./TaxiListContainer.module.scss";
import TaxiDetail from "@/Components/TaxiDetail/TaxiDetail";

export default function TaxiListContainer({ data }) {
  return (
    <div className={styles.taxiListContainer}>
      {data?.map((item, index) => (
        <TaxiDetail item={item} key={index} />
      ))}
    </div>
  );
}
