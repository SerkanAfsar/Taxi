import BaseService from ".";
export async function GetCityList() {
  return BaseService({ apiUrl: `getCity` });
}

export async function GetCityDetail({ citySlug }) {
  return BaseService({ apiUrl: `?city=${citySlug}` });
}
