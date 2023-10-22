import CityListContainer from "@/Containers/CityListContainer";
import { notFound } from "next/navigation";
import { GetCityList, GetCityDetail } from "@/Services/City.Service";
import { slugUrl } from "@/Utils/Helpers";
import TaxiListContainer from "@/Containers/TaxiListContainer";

export async function generateMetadata({ params }, parent) {
  // read route params
  const { slug } = params;

  if (!slug) {
    return {
      title: "Türkiye İl - İlçe Taksi Durakları Listesi",
      description: "Türkiye İl - İlçe Taksi Durakları Listesi",
      charSet: "UTF-8",
      robots: "index,follow",
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
  }
  const { data } = await GetCityDetail({
    citySlug: slug[0],
  });

  if (slug.length == 1) {
    return {
      title: `${data[0]?.Sehir} Taksi Durakları`,
      description: `${data[0]?.Sehir} Taksi Durakları`,
      charSet: "UTF-8",
      robots: "index,follow",
      publisher: "Taksi Durakları",
      author: "Taksi Durakları - info@taksiduraklari.net",
      distribution: "global",
      themeColor: "#fff",
      resourceType: "Web Page",
      openGraph: {
        title: `${data[0]?.Sehir} Taksi Durakları`,
        description: `${data[0]?.Sehir} Taksi Durakları`,
        publisher: "Taksi Durakları",
        locale: "tr_TR",
        site_name: "Taksi Durakları",
      },
      twitter: {
        card: "summary",
        description: `${data[0]?.Sehir} Taksi Durakları`,
        title: `${data[0]?.Sehir} Taksi Durakları`,
        creator: "@taksiduraklari",
      },
      resourceType: "Web Page",
      alternates: {
        canonical: `${process.env.SITE_NAME}/taksi-duraklari/${slug[0]}`,
        dnsPrefetch: "//fonts.googleapis.com/",
        dnsPrefetch: "//www.google-analytics.com/",
        dnsPrefetch: "//ajax.googleapis.com/",
      },
    };
  }
  if (slug.length == 2) {
    const item = data.filter((a) => slugUrl(a.ilce) == slug[1])[0];
    return {
      title: `${item?.Sehir} ${item?.ilce} Taksi Durakları`,
      description: `${item?.Sehir} ${item?.ilce} Taksi Durakları`,
      charSet: "UTF-8",
      robots: "index,follow",
      publisher: "Taksi Durakları",
      author: "Taksi Durakları - info@taksiduraklari.net",
      distribution: "global",
      themeColor: "#fff",
      resourceType: "Web Page",
      openGraph: {
        title: `${item?.Sehir} ${item?.ilce} Taksi Durakları`,
        description: `${item?.Sehir} ${item?.ilce} Taksi Durakları`,
        publisher: "Taksi Durakları",
        locale: "tr_TR",
        site_name: "Taksi Durakları",
      },
      twitter: {
        card: "summary",
        description: `${item?.Sehir} ${item?.ilce} Taksi Durakları`,
        title: `${item?.Sehir} ${item?.ilce} Taksi Durakları`,
        creator: "@taksiduraklari",
      },
      resourceType: "Web Page",
      alternates: {
        canonical: `${process.env.SITE_NAME}/taksi-duraklari/${slug[0]}/${slug[1]}`,
        dnsPrefetch: "//fonts.googleapis.com/",
        dnsPrefetch: "//www.google-analytics.com/",
        dnsPrefetch: "//ajax.googleapis.com/",
      },
    };
  }
}

export default async function Page({ params }) {
  const { slug } = params;

  if (!slug) {
    return <CityListContainer />;
  }

  const {
    status,
    message = null,
    data = [],
  } = await GetCityDetail({
    citySlug: slug[0],
  });

  if (status != "success") {
    throw new Error(message || "Error Has Accured");
  }
  if (data.length == 0) {
    notFound();
  }
  if (slug && slug.length == 1) {
    return <TaxiListContainer data={data} />;
  }
  if (slug && slug.length == 2) {
    return (
      <TaxiListContainer
        data={data.filter((a) => slugUrl(a.ilce) == slug[1])}
      />
    );
  }
}

export const revalidate = 6000;

export async function generateStaticParams() {
  const { data, status, message } = await GetCityList();
  console.log(message);
  const arr = [];
  if (status == "success") {
    for (let i = 0; i < data.length; i++) {
      arr.push({ slug: [`${data[i].SehirSlug}`] });
      const { data: distictData } = await GetCityDetail({
        citySlug: data[i].SehirSlug,
      });
      Array.from(new Set(distictData?.map((item) => item.ilce)))?.forEach(
        (item) => {
          arr.push({
            slug: [`${data[i].SehirSlug}`, `${slugUrl(item)}`],
          });
        }
      );
    }
  }

  return arr;
}
