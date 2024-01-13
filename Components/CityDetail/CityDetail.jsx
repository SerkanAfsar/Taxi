import Districts from "../Districts/Disticts";
import TaxiDetail from "../TaxiDetail/TaxiDetail";
export default function CityDetail({ item, children }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 col-md-3 col-lg-2 mb-4 mb-xl-0">
          <Districts
            citySlug={item?.citySlug}
            cityName={item?.cityName}
            districtData={item?.districtData}
          />
        </div>
        <div className="col-12 col-md-9 col-lg-10">{children}</div>
      </div>
    </div>
  );
}
