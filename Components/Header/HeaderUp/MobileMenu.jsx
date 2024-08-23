import Link from "next/link";
import styles from "./MobileMenu.module.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiFillCar } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
const MobileMenu = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

  const handleChangeActive = () => {
    setIsActive(!isActive);
  };

  useImperativeHandle(ref, () => {
    return {
      handleChangeActive,
    };
  });

  useLayoutEffect(() => {
    if (isActive) {
      const value = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = value;
      };
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [pathName]);

  return (
    <aside
      ref={ref}
      className={
        isActive ? `${styles.aside} ${styles.active}` : `${styles.aside}`
      }
    >
      <ul>
        <li>
          <b>Taksi Durakları</b>
          <IoMdCloseCircleOutline
            role="button"
            size={25}
            onClick={handleChangeActive}
          />
        </li>
        <li>
          <Link
            title="Anasayfa"
            className={pathName == "/" ? `${styles.linkActive}` : ""}
            href={"/"}
          >
            <FaHome />
            Anasayfa
          </Link>
        </li>
        {props?.itemList?.map((item, index) => (
          <li key={index}>
            <Link
              className={pathName == item.url ? `${styles.linkActive}` : ""}
              title={item.title}
              href={item.url}
            >
              <AiFillCar />
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            title="Türkiye Taksi Durakları Listesi"
            href={"/taksi-duraklari"}
            className={
              pathName == "/taksi-duraklari" ? `${styles.linkActive}` : ""
            }
          >
            <AiFillCar />
            Tüm İller Listesi
          </Link>
        </li>
      </ul>
    </aside>
  );
});
MobileMenu.displayName = "MobileMenu";
export default MobileMenu;
