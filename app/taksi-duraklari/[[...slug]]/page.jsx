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
      title: "Türkiye İl - İlçe Taksi Durakları Listesi | Taksi Numaraları",
      description:
        "Türkiye İl - İlçe Taksi Durakları Listesi | Taksi Numaraları",
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
        canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}/taksi-duraklari`,
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
      title: `${data?.sehirAd} Taksi Durakları | ${data?.sehirAd} Taksi Numaraları `,
      description: `${data?.sehirAd} Taksi Durakları ${data?.sehirAd} Taksi Numaraları`,
      charSet: "UTF-8",
      robots: "index,follow",
      publisher: "Taksi Durakları",
      author: "Taksi Durakları - info@taksiduraklari.net",
      distribution: "global",
      themeColor: "#fff",
      resourceType: "Web Page",
      authors: [{ name: "Taksi Duraklari" }],
      openGraph: {
        title: `${data?.sehirAd} Taksi Durakları`,
        description: `${data?.sehirAd} Taksi Durakları`,
        publisher: "Taksi Durakları",
        locale: "tr_TR",
        site_name: "Taksi Durakları",
      },
      twitter: {
        card: "summary",
        description: `${data?.sehirAd} Taksi Durakları`,
        title: `${data?.sehirAd} Taksi Durakları`,
        creator: "@taksiduraklari",
      },
      resourceType: "Web Page",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}/taksi-duraklari/${slug[0]}`,
        dnsPrefetch: "//fonts.googleapis.com/",
        dnsPrefetch: "//www.google-analytics.com/",
        dnsPrefetch: "//ajax.googleapis.com/",
      },
    };
  }
  if (slug.length == 2) {
    const item = data?.taxies?.filter((a) => slugUrl(a.ilce) == slug[1])[0];
    return {
      title: `${item?.sehir} ${item?.ilce} Taksi Durakları | ${item?.sehir} ${item?.ilce} Taksi Numaraları`,
      description: `${item?.sehir} ${item?.ilce} Taksi Durakları | ${item?.sehir} ${item?.ilce} Taksi Numaraları`,
      charSet: "UTF-8",
      robots: "index,follow",
      publisher: "Taksi Durakları",
      author: "Taksi Durakları - info@taksiduraklari.net",
      distribution: "global",
      themeColor: "#fff",
      resourceType: "Web Page",
      authors: [{ name: "Taksi Duraklari" }],
      openGraph: {
        title: `${item?.sehir} ${item?.ilce} Taksi Durakları`,
        description: `${item?.sehir} ${item?.ilce} Taksi Durakları`,
        publisher: "Taksi Durakları",
        locale: "tr_TR",
        site_name: "Taksi Durakları",
      },
      twitter: {
        card: "summary",
        description: `${item?.sehir} ${item?.ilce} Taksi Durakları`,
        title: `${item?.sehir} ${item?.ilce} Taksi Durakları`,
        creator: "@taksiduraklari",
      },
      resourceType: "Web Page",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}/taksi-duraklari/${slug[0]}/${slug[1]}`,
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
    return (
      <>
        <h1 style={{ display: "none" }}>
          Türkiye İl İlçe Taksi Durakları Listesi | Taksi Numaraları
        </h1>
        <h2 style={{ display: "none" }}>Taksi Durakları</h2>
        <h3 style={{ display: "none" }}>Türkiye Taksi Durakları</h3>
        <CityListContainer />
      </>
    );
  }

  const {
    success = false,
    errorList = [],
    data = [],
  } = await GetCityDetail({
    citySlug: slug[0],
  });

  if (!success) {
    throw new Error(errorList || "Error Has Accured");
  }
  if (data.length == 0) {
    notFound();
  }
  if (slug && slug.length == 1) {
    return (
      <>
        <h1
          style={{ display: "none" }}
        >{`${data.sehirAd} Taksi Durakları Listesi`}</h1>
        <h2 style={{ display: "none" }}>
          {`${data.sehirAd} Taksi Durakları`} |{" "}
          {`${data.sehirAd} Taksi Numaraları`}{" "}
        </h2>
        <h3 style={{ display: "none" }}>{`${data.sehirAd} Taksi`}</h3>
        <TaxiListContainer data={data.taxies} />
      </>
    );
  }
  if (slug && slug.length == 2) {
    const ilceData = data?.taxies?.filter((a) => slugUrl(a.ilce) == slug[1]);
    return (
      <>
        <h1 style={{ display: "none" }}>
          {`${ilceData[0].sehir} ${ilceData[0].ilce} Taksi Durakları Listesi`} |{" "}
          {`${ilceData[0].sehir} ${ilceData[0].ilce} Taksi Numaraları`}
        </h1>
        <h2
          style={{ display: "none" }}
        >{`${ilceData[0].sehir} ${ilceData[0].ilce} Taksi Durakları`}</h2>
        <h3
          style={{ display: "none" }}
        >{`${ilceData[0].sehir} ${ilceData[0].ilce} Taksi`}</h3>
        <TaxiListContainer data={ilceData} />
      </>
    );
  }
}

export const revalidate = 6000;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const { data, status, message } = await GetCityList();

  const arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push({ slug: [`${data[i].sehirSlug}`] });
    const { data: distictData } = await GetCityDetail({
      citySlug: data[i].sehirSlug,
    });
    Array.from(new Set(distictData?.taxies?.map((item) => item.ilce)))?.forEach(
      (item) => {
        arr.push({
          slug: [`${data[i].sehirSlug}`, `${slugUrl(item)}`],
        });
      }
    );
  }

  return arr;
}
