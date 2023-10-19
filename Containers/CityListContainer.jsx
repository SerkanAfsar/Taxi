import { GetCityList } from "@/Services/City.Service";
import CityListWrapper from "../Components/CityList/CityListWrapper";
export default async function CityListContainer() {
  const result = await GetCityList();
  if (result?.status != "success") {
    throw new Error(result.message);
  }
  return <CityListWrapper data={result?.data} />;
}
