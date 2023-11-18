import BaseService from ".";
export async function GetCityList() {
  return BaseService({ apiUrl: `Cities` });
}

export async function GetCityDetail({ citySlug }) {
  return BaseService({ apiUrl: `Cities/City?city=${citySlug}` });
}
