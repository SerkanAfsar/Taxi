import Link from "next/link";
import styles from "./HeaderDown.module.scss";
import Button from "@/Components/UI/Button/Button";
import { AiFillHome } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
export default function HeaderDown() {
  return (
    <div className={`d-none d-xl-block ${styles.headerDown}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav>
              <ul>
                <li>
                  <Link href={"/"}>
                    <AiFillHome />
                    <span>Anasayfa</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/taksi-duraklari/istanbul"}>
                    <AiFillCar />
                    <span>İstanbul Taksi Durakları</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/taksi-duraklari/ankara"}>
                    <AiFillCar />
                    <span>Ankara Taksi Durakları</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/taksi-duraklari/izmir"}>
                    <AiFillCar />
                    <span>İzmir Taksi Durakları</span>
                  </Link>
                </li>
              </ul>
              <div className="ms-auto">
                <Button text="Tüm İller" url="/taksi-duraklari" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
