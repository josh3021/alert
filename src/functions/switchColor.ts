import { IDataItem } from "~/interfaces/api/data";
import { switchDay } from "./switchDay";

export const switchColor = (dataItem: IDataItem | null, day: number) => {
  const data = switchDay(dataItem, day);
  switch (data) {
    case 0:
      return "#3498db";
    case 1:
      return "#2ecc71";
    case 2:
      return "#e67e22";
    case 3:
      return "#c0392b";
    default:
      return "#2c3e50";
  }
};

export const switchFoodPoisoningColor = (
  dataItem: IDataItem | null,
  day: number
) => {
  const data = switchDay(dataItem, day);
  if (data < 0) {
    return "#2c3e50";
  } else if (data < 55) {
    return "#3498db";
  } else if (data < 71) {
    return "#2ecc71";
  } else if (data < 86) {
    return "#e67e22";
  } else {
    return "#c0392b";
  }
};
