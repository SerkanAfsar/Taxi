import { GetCityList } from "@/Services/City.Service";
import CityListWrapper from "../Components/CityList/CityListWrapper";
export default async function CityListContainer() {
  const result = await GetCityList();

  if (!result?.success) {
    throw new Error(result.errorList);
  }
  return <CityListWrapper data={result?.data} />;
}
