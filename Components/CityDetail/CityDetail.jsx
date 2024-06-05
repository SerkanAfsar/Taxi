import Districts from "../Districts/Disticts";
import TaxiDetail from "../TaxiDetail/TaxiDetail";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
export default function CityDetail({ breadCrumbArr, item, children }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12">
          {/* {breadCrumbArr?.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))} */}
          <BreadCrumb arr={breadCrumbArr} />
        </div>
      </div>
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
