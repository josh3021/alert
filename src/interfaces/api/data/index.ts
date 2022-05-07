import { API_DATA_TYPE } from "~/constants/common";

export interface IDataItem {
  code: string;
  areaNo: string;
  date: string;
  today: string;
  tomorrow: string;
  dayaftertomorrow: string;
  twodaysaftertomorrow?: string;
}

export interface INotProviding {
  code: string;
  message: string;
  providingRangeDescription: string;
}

export interface IAPIResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: API_DATA_TYPE;
      items: {
        item: IDataItem[];
      };
      pageNo: number;
      numOfRows: string;
      totalCount: string;
    };
  };
}
