import CityListSection from "@/Components/CityListSection/CityListSection";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";
import GetCityListService from "@/Services/City.Service";

export default async function Home() {
  const result = await GetCityListService();
  if (result?.status != "success") {
    throw new Error(result.message);
  }
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CityListSection data={result?.data} />
    </>
  );
}
