import Districts from "@/Components/Districts/Disticts";
import { GetCityDetailService } from "./page";
import CityDetail from "@/Components/CityDetail/CityDetail";

export default async function Layout({ params, children }) {
  const { slug } = params;
  if (!slug) {
    return <>{children}</>;
  } else {
    const data = await GetCityDetailService({ citySlug: slug[0] });
    const districtData = Array.from(
      new Set(data?.map((item, index) => item.ilce))
    );
    return (
      <CityDetail
        item={{
          citySlug: slug[0],
          cityName: data[0]?.Sehir,
          districtData: districtData,
        }}
      >
        {children}
      </CityDetail>
    );
  }
}
