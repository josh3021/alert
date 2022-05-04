import moment from "moment-timezone";
import Config from "~/config";
import { ITEMS } from "../constants/AlertStep";

export const fetchAPI = async (item: ITEMS, regionCode: string) => {
  let currentTime = moment().tz(Config.TIMEZONE).format("YYYYMMDDHH");
  const currentHour = +currentTime.substring(8, 10);
  if (currentHour >= 6 && currentHour < 18) {
    currentTime = `${currentTime.substring(0, 8)}06`;
  } else {
    currentTime = `${currentTime.substring(0, 8)}18`;
  }
  if (!regionCode) {
    return;
  }
  return fetch(
    `${Config.MAIN_API_URI}/${item}?serviceKey=${Config.API_KEY}&areaNo=${regionCode}&time=${currentTime}&dataType=JSON`,
    { method: "GET" }
  ).then((r) => r.json());
};
