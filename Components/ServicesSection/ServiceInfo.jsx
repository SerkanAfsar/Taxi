import styles from "./ServiceInfo.module.scss";
export default function ServiceInfo({ item }) {
  return (
    <div className={styles.servicesInfo}>
      <div className={styles.servicesInfo__top}>{item?.icon}</div>
      <h3>{item?.title}</h3>
      <p>{item?.description}</p>
    </div>
  );
}
