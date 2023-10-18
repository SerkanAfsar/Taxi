import { GetCityListService } from "@/Services/City.Service";
import CityListSection from "./CityListSection";
export default async function CityListContainer() {
  const result = await GetCityListService();
  if (result?.status != "success") {
    throw new Error(result.message);
  }
  return <CityListSection data={result?.data} />;
}
