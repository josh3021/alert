import { AxiosResponse } from "axios";
import moment from "moment-timezone";
import config from "~/config";
import { ITEMS } from "~/constants/common";
import { requests } from "./core";

export async function fetchData(
  item: ITEMS,
  regionCode: number
): Promise<AxiosResponse<any>> {
  let currentTime = moment().tz(config.TIMEZONE).format("YYYYMMDDHH");
  const currentHour = +currentTime.substring(8, 10);
  if (currentHour >= 6 && currentHour < 18) {
    currentTime = `${currentTime.substring(0, 8)}06`;
  } else {
    currentTime = `${currentTime.substring(0, 8)}18`;
  }
  if (!regionCode) {
    throw new Error("RegionCode is NOT Valid");
  }
  return requests.get(
    `${config.MAIN_API_URI}/${item}?serviceKey=${config.API_KEY}&areaNo=${regionCode}&time=${currentTime}&dataType=JSON`
  ) as Promise<AxiosResponse<any, any>>;
}
