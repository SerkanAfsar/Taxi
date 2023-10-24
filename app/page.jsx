import CityListContainer from "@/Containers/CityListContainer";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";

export const metadata = {
  title: "Türkiye İl - İlçe Taksi Durakları Listesi",
  description: "Türkiye İl - İlçe Taksi Durakları Listesi",
  charSet: "UTF-8",
  robots: "index,follow",
  authors: [{ name: "Taksi Duraklari" }],
  publisher: "Taksi Surakları",
  author: "Taksi Durakları - info@taksi-duraklari.net",
  distribution: "global",
  themeColor: "#fff",
  resourceType: "Web Page",
  openGraph: {
    title: "Türkiye İl - İlçe Taksi Durakları Listesi",
    description: "Türkiye  İl - İlçe Taksi Durakları Listesi",
    publisher: "Taksi Durakları",
    locale: "tr_TR",
    site_name: "Taksi Durakları",
  },
  twitter: {
    card: "summary",
    description: "Türkiye İl - İlçe Taksi Durakları Listesi",
    title: "Türkiye İl - İlçe Taksi Durakları Listesi",
    creator: "@taksiduraklari",
  },
  resourceType: "Web Page",
  alternates: {
    canonical: `${process.env.SITE_NAME}`,
    dnsPrefetch: "//fonts.googleapis.com/",
    dnsPrefetch: "//www.google-analytics.com/",
    dnsPrefetch: "//ajax.googleapis.com/",
  },
};

export default async function Home() {
  return (
    <>
      <h1 style={{ display: "none" }}>
        Türkiye İl | ilçe Taksi Durakları Listesi
      </h1>
      <HeroSection />
      <ServicesSection />
      <CityListContainer />
    </>
  );
}

export const revalidate = 6000;
