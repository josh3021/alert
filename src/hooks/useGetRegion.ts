import { useState } from "react";
import { useRecoilValue } from "recoil";
import { IRegionCodeDocument } from "~/interfaces/api/kakao/ICoord2RegionCode";
import { locationState } from "~/recoil/atoms/location";

export const useGetRegion = () => {
  const location = useRecoilValue(locationState);
  const [datas, setDatas] = useState<IRegionCodeDocument[]>();

  return datas && datas.find((d) => d.region_type === "H");
};
