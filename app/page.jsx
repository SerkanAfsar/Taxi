import CityListContainer from "@/Components/CityListSection/CityListContainer";
import CityListSection from "@/Components/CityListSection/CityListSection";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";
import GetCityListService from "@/Services/City.Service";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CityListContainer />
    </>
  );
}
