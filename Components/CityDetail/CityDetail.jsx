import Districts from "../Districts/Disticts";
import TaxiDetail from "../TaxiDetail/TaxiDetail";
export default function CityDetail({ item, children }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 col-md-2">
          <Districts
            citySlug={item?.citySlug}
            cityName={item?.cityName}
            districtData={item?.districtData}
          />
        </div>
        <div className="col-12 col-md-10">{children}</div>
      </div>
    </div>
  );
}
