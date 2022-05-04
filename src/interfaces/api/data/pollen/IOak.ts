import { API_DATA_TYPE } from "~/constants/common";

export interface IOakAPIResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: API_DATA_TYPE;
      items: {
        item: [
          {
            code: string;
            areaNo: string;
            date: string;
            today: string;
            tomorrow: string;
            dayaftertomorrow: string;
            twodaysaftertomorrow?: string;
          }
        ];
      };
      pageNo: number;
      numOfRows: string;
      totalCount: string;
    };
  };
}
