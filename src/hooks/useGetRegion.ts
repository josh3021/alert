import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Region } from "~/api/region";
import config from "~/config";
import { IRegionCodeDocument } from "~/interfaces/api/kakao/ICoord2RegionCode";
import { locationState } from "~/recoil/atoms/location";

export const useGetRegion = () => {
  const location = useRecoilValue(locationState);
  const [datas, setDatas] = useState<IRegionCodeDocument[]>();
  useEffect(() => {
    if (!location) return;
    (async () => {
      const { longitude, latitude } = location;
      const response = await Region.getRegion(
        `${config.KAKAO_ADDRESS_REST_API_URI}&x=${longitude}&y=${latitude}`,
        { headers: { Authorization: `KakaoAK ${config.KAKAO_REST_API_KEY}` } }
      );
      if (response.status === 200) {
        setDatas(response.data.documents);
      }
    })();
  }, [location]);

  return datas && datas.find((d) => d.region_type === "H");
};
