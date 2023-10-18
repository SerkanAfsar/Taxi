import CityDetail from "@/Components/CityDetail/CityDetail";
import CityListContainer from "@/Components/CityListSection/CityListContainer";
import { GetCityDetail } from "@/Services/City.Service";
import { notFound } from "next/navigation";

export async function GetCityDetailService({ citySlug }) {
  const result = await GetCityDetail({ citySlug });
  if (result.status != "success") {
    throw new Error(result?.message || "Error Has Accured");
  }
  return result.data;
}

export default async function Page({ params, searchParams }) {
  const { slug = null } = params;
  if (!slug) {
    return <CityListContainer />;
  }

  switch (slug?.length) {
    case 1:
    default: {
      const data = GetCityDetailService({ citySlug: slug[0] });
      return <CityDetail />;
    }
    case 2: {
      return (
        <div>
          {slug[0]} {slug[1]}
        </div>
      );
    }
  }
}
