import { API_DATA_TYPE } from "~/constants/common";
import { IDataItem } from "..";

export interface IOakAPIResponse {
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
