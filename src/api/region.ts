import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ICoord2RegionCode } from "~/interfaces/api/kakao/ICoord2RegionCode";
import { requests } from "./core";

export const Region = {
  getRegion: (url: string, config?: AxiosRequestConfig<any>) =>
    requests.get(url, config) as Promise<AxiosResponse<ICoord2RegionCode, any>>,
};
