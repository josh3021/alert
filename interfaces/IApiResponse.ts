export enum IDataType {
  XML = "XML",
  JSON = "JSON",
}

export interface IOakApiResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: IDataType;
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
