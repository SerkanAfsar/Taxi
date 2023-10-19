import CityDetail from "@/Components/CityDetail/CityDetail";
import CityListContainer from "@/Containers/CityListContainer";
import { notFound } from "next/navigation";
import { GetCityList, GetCityDetail } from "@/Services/City.Service";
import { slugUrl } from "@/Utils/Helpers";
import TaxiListContainer from "@/Containers/TaxiListContainer";

export default async function Page({ params, searchParams }) {
  const { slug = null } = params;
  if (!slug) {
    return <CityListContainer />;
  }

  const { status, data = null } = await GetCityDetail({
    citySlug: slug[0],
  });

  if (status != "success") {
    throw new Error(result?.message || "Error Has Accured");
  }
  if (slug && (slug.length == 1 || slug.length == 2)) {
    return (
      <TaxiListContainer
        data={
          slug.length == 1
            ? data
            : data.filter((a) => slugUrl(a.ilce) == slug[1])
        }
      />
    );
  }
  notFound();
}

export const revalidate = 6000;

export async function generateStaticParams() {
  const { data } = await GetCityList();
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    arr.push({ slug: [`${data[i].SehirSlug}`] });
    const { data: distictData } = await GetCityDetail({
      citySlug: data[i].SehirSlug,
    });
    Array.from(new Set(distictData?.map((item) => item.ilce))).forEach(
      (item) => {
        arr.push({
          slug: [`${data[i].SehirSlug}`, `${slugUrl(item)}`],
        });
      }
    );
  }
  return arr;
}
