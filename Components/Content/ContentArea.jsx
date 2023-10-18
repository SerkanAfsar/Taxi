import Button from "../UI/Button/Button";
import styles from "./ContentArea.module.scss";

export default function ContentArea({
  infoText,
  hasBottom = true,
  btnInfo = null,
}) {
  return (
    <div className={styles.content}>
      <h2 className={hasBottom ? `${styles.hasBottom}` : ``}>
        {infoText?.title}
      </h2>
      {infoText && <p>{infoText?.content}</p>}
      {btnInfo && (
        <Button
          text={btnInfo.text}
          url="/taksi-duraklari"
          type={btnInfo.type}
        />
      )}
    </div>
  );
}
