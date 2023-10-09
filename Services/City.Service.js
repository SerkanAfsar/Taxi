import BaseService from ".";
export default async function GetCityListService() {
  return BaseService({ apiUrl: `getCity` });
}
