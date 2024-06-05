import CityDetail from "@/Components/CityDetail/CityDetail";
import { GetCityDetail } from "@/Services/City.Service";
import { slugUrl } from "@/Utils";
import { notFound } from "next/navigation";

export default async function Layout({ params, children }) {
  const { slug } = params;

  const breadCrumbArr = [
    {
      name: "Anasayfa",
      url: "/",
    },
    { name: "Taksi Durakları", url: "/taksi-duraklari" },
  ];
  if (!slug) {
    return <>{children}</>;
  } else {
    const { data } = await GetCityDetail({ citySlug: slug[0] });
    if (!data) {
      return notFound();
    }

    breadCrumbArr.push({
      name: data.sehirAd,
      url: `/taksi-duraklari/${slug[0]}`,
    });

    const districtData = Array.from(
      new Set(data?.taxies?.map((item, index) => item.ilce))
    );

    const selectedDistrict = districtData.find((a) => slugUrl(a) == slug[1]);
    selectedDistrict &&
      breadCrumbArr.push({
        name: selectedDistrict,
        url: `/taksi-duraklari/${slug[0]}/${slug[1]}`,
      });

    return (
      <CityDetail
        breadCrumbArr={breadCrumbArr}
        item={{
          citySlug: slug[0],
          cityName: data[0]?.sehir,
          districtData: districtData,
        }}
      >
        {children}
      </CityDetail>
    );
  }
}
