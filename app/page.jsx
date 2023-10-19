import CityListContainer from "@/Containers/CityListContainer";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CityListContainer />
    </>
  );
}

export const revalidate = 6000;
