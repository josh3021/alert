import { IDataItem } from "~/interfaces/api/data";

export const switchDay = (dataItem: IDataItem | null, day: number) => {
  if (!dataItem) return -1;
  switch (day) {
    case 1:
      return +dataItem.today;
    case 2:
      return +dataItem.tomorrow;
    case 3:
      return +dataItem.dayaftertomorrow;
    case 4:
      return dataItem.twodaysaftertomorrow
        ? +dataItem.twodaysaftertomorrow
        : -1;
    default:
      return -1;
  }
};
