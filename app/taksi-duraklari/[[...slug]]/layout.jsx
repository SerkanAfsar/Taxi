import CityDetail from "@/Components/CityDetail/CityDetail";
import { GetCityDetail } from "@/Services/City.Service";

export default async function Layout({ params, children }) {
  const { slug } = params;
  if (!slug) {
    return <>{children}</>;
  } else {
    const { data } = await GetCityDetail({ citySlug: slug[0] });

    const districtData = Array.from(
      new Set(data?.taxies?.map((item, index) => item.ilce))
    );
    return (
      <CityDetail
        item={{
          citySlug: slug[0],
          cityName: data[0]?.sehirAd,
          districtData: districtData,
        }}
      >
        {children}
      </CityDetail>
    );
  }
}
