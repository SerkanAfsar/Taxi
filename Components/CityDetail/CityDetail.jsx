import styles from "./CityDetail.module.scss";
import Districts from "../Districts/Disticts";
export default function CityDetail({ item, children }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 col-md-3">
          <Districts
            citySlug={item?.citySlug}
            cityName={item?.cityName}
            districtData={item?.districtData}
          />
        </div>
        <div className="col-12 col-md-9">{children}</div>
      </div>
    </div>
  );
}
